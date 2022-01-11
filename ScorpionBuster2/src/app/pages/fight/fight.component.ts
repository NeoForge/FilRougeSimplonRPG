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
    this.monsterService.GetMonsterById(this.localData.monsterId).subscribe(
      (data: any) => {
        this.monster = data;
      }
    );
  }

  fightLoop(){
    
  }
  onLeave(){
    this.router.navigateByUrl('/map');
  }
}
