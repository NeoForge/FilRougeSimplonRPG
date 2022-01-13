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
  combatFinished = false;
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
        this.localData.combatState = "wait";
        this.GM.dispatchLocal(this.localData);
        this.fightLoop();
      }
    );
  }

  timer = (ms:any) => new Promise(res => setTimeout(res, ms));
  async fightLoop(){
    console.log(this.monster.hp > 0 && this.data.hp > 0 && this.localData.combatState != "flee");
    
    while (this.monster.hp > 0 && this.data.hp > 0 && this.localData.combatState != "flee") {
      await this.timer(500);

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
          this.localData.combatState = "wait";
          this.GM.dispatchLocal(this.localData);
          this.changeHPbar();
          break;
        }
        case "flee": {
          
          this.localData.combatState = "flee";
          this.data.credit -= 10;
          this.GM.dispatch(this.data);
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

  if (this.monster.hp <= 0) {
    console.log("You win!");
    this.combatlog="Vous avais vaincu le "+this.monster.name+"! Vous gagnez 100 de Pa$$ion!";
    this.data.credit += 100;
    this.localData.playerState="indice";
    this.GM.dispatch(this.data);
    this.combatFinished = true;
  } else if (this.data.hp <= 0) {
    console.log("You lose!");
    this.combatlog="Vous avait était vaincu par le "+this.monster.name+"! Vous perdez votre vie!";
    this.combatFinished = true;
    this.router.navigateByUrl('game-over');
    this.ngOnDestroy();

  }
}
changeHPbar() {
  let bar = document.getElementById("bar") as HTMLDivElement;
  bar.style.width = `${this.monster.hp}%`;
}
  onLeave(){
    this.localData.playerState="indice";
    this.GM.dispatch(this.data);
    this.router.navigateByUrl('/map');
    this.ngOnDestroy();
  }
  ngOnDestroy() {
    this.localData.combatState = "flee";
    console.log('Destroying figth...');
  }

}
