import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/apiServices/hero.service';
import { MonsterService } from 'src/app/apiServices/monster.service';
import { GameManager } from 'src/app/helpers/gameManager';
import { Monster } from 'src/app/models/monster';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  constructor(private router: Router, private heroService: HeroService, private monsterService: MonsterService) { }
  GM = GameManager.getInstance(this.heroService, parseInt(localStorage.getItem("hero") as string));
  data: any;
  localData: any;
  monster: any;

  ngOnInit(): void {
    this.GM.Data.subscribe(
      (data: any) => {
        this.data = data;
      }
    );
    this.GM.LocalData.subscribe(
      (data: any) => {
        this.localData = data;
      }
    );
    this.monsterService.GetMonsterById(1).subscribe(
      (data: any) => {
        this.monster = data;   
        this.localData.playerState = "fight";
        this.GM.dispatchLocal(this.localData);
        console.log(this.localData.playerState);
        this.fightLoop();
      }
    );
  }

  timer = (ms:any) => new Promise(res => setTimeout(res, ms));
  async fightLoop(){
    while (this.monster.hp > 0 && this.data.hp > 0 && this.localData.combatState != "flee") {
      await this.timer(1000);
      console.log("fight");
      switch (this.localData.combatState) {
        case "attack": {
          this.monster.hp = this.monster.hp - this.data.attack*this.data.attack;
          this.data.hp = this.data.hp - this.monster.attack;
          this.GM.dispatchLocal(this.localData);
          this.localData.combatState = "wait";
          break;
        }
        case "flee": {
          this.localData.combatState = "flee";
          this.onLeave();
          break;
        }
        case "defense": {
          this.data.hp = this.data.hp - this.monster.attack / 2;
          this.localData.combatState = "wait";
          this.GM.dispatchLocal(this.localData);
          break;
        }
        case "wait": {
          break;
        }
    }
  }

  if (this.monster.hp == 0) {
    this.data.credit += 10;
    this.GM.dispatch(this.data);
  } else if (this.data.hp == 0) {

    this.router.navigateByUrl('game-over');
  }
}
changeHPbar() {
  let bar = document.getElementById("bar") as HTMLDivElement;
  bar.style.width = `${this.monster.hp}%`;
}
  onLeave(){
    this.router.navigateByUrl('/map');
    this.ngOnDestroy();
  }
  ngOnDestroy() {
    this.localData.combatState = "flee";
    console.log('Destroying...');
    
  }

}
