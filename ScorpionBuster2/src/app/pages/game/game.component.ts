import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/apiServices/hero.service';
import { MapService } from 'src/app/apiServices/map.service';
import { MonsterService } from 'src/app/apiServices/monster.service';
import { PNJService } from 'src/app/apiServices/pnj.service';
import { GameManager } from 'src/app/helpers/gameManager';
import { PNJ } from 'src/app/models/Pnj';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {



  constructor(private router: Router, private mapService: MapService, private pnjService: PNJService, private monsterService: MonsterService, private heroService: HeroService) { }

  GM = GameManager.getInstance(this.heroService, parseInt(localStorage.getItem("hero") as string));
  gameData: any;
  localData: any;
  pnjData: any;
  monsterData: any;
  mapData: any;

  ngOnInit(): void {
    this.GM.Data.subscribe(data => {
      this.gameData = data;
    });
    this.GM.LocalData.subscribe(data => {
      this.localData = data;
    });
    this.mapService.GetMapByid(parseInt(localStorage.getItem("mapId") as string)).subscribe(data => {
      this.mapData = data;
      let div = document.querySelector(".game") as HTMLElement;
      div.style.backgroundImage = "url("+'../../../assets/' + this.mapData.background + ")";
      localStorage.setItem("background", this.mapData.background);
      if (data.pnjId != null) {
        
        this.pnjService.GetPNJById(data.pnjId).subscribe(data => {
          this.pnjData = data;
          
        });
      }
      if(data.monsterId != null){
        this.monsterService.GetMonsterById(data.monsterId).subscribe(data => {
          this.monsterData = data;
        });
      }
    });
  }
  onFight(monsterId : number) {
    this.localData.monsterId = monsterId;
    this.GM.dispatchLocal(this.localData);
    this.router.navigateByUrl('fight')
  }
  onPNJ(pnjId : number) {
    this.localData.pnjId = pnjId;
    this.localData.storyStageBeforeDialogue = this.gameData.storyStage;
    this.GM.dispatchLocal(this.localData);
    this.router.navigateByUrl('dialogue')
  }
  onMap()
  {
    this.router.navigateByUrl('map')
  }


}
