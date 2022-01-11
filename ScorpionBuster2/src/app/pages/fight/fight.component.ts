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
  combatlog : string = "";
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
        this.fightLoop();
      }
    );
  }

  timer = (ms:any) => new Promise(res => setTimeout(res, ms));
  async fightLoop(){
    while (this.monster.hp > 0 && this.data.hp > 0 && this.localData.combatState != "flee") {
      await this.timer(1000);
      let monsterDamage = this.data.attack - this.monster.defense;
      let playerDamage = this.monster.attack - this.data.defense;
      switch (this.localData.combatState) {
        case "attack": {
          if (monsterDamage <= 0) {
            monsterDamage = 0;
          }
          if (playerDamage <= 0) {
            playerDamage = 0;
          }
          this.combatlog="";
          this.combatlog += `${this.data.name} attacked ${this.monster.name} for ${monsterDamage} damage.\n`;
          this.combatlog += `${this.monster.name} attacked ${this.data.name} for ${playerDamage} damage.\n`;
          this.monster.hp -= monsterDamage;
          this.data.hp -= playerDamage;
          this.GM.dispatchLocal(this.localData);
          this.localData.combatState = "wait";
          this.changeHPbar();
          break;
        }
        case "flee": {
          
          this.localData.combatState = "flee";
          this.onLeave();
          break;
        }
        case "defense": {
          if (playerDamage <= 0) {
            playerDamage = 0;
          }
          this.combatlog="";
          this.combatlog += `${this.data.name} defend himself\n`;
          this.combatlog += `${this.monster.name} attacked ${this.data.name} for ${playerDamage/2} damage.\n`;
          this.data.hp -= playerDamage / 2;
          this.localData.combatState = "wait";
          this.GM.dispatchLocal(this.localData);
          break;
        }
        case "wait": {
          break;
        }
    }
  }
  console.log("I'm OUT OF THE LOOP");
  

  if (this.monster.hp <= 0) {
    console.log("You win!");
    this.data.credit += 100;
    this.GM.dispatch(this.data);
    this.onLeave();
  } else if (this.data.hp <= 0) {
    console.log("You lose!");
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
