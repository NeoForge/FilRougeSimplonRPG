import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/apiServices/hero.service';
import { MonsterService } from 'src/app/apiServices/monster.service';
import { PNJService } from 'src/app/apiServices/pnj.service';
import { GameManager } from 'src/app/helpers/gameManager';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  constructor(private router: Router, private pnjService: PNJService, private monsterService: MonsterService, private heroService: HeroService) { }
  gameData: any;
  localData: any;
  PNJData: any;
  GM = GameManager.getInstance(this.heroService, parseInt(localStorage.getItem("hero") as string));
  DialogResponse =[] ;

  ngOnInit(): void {
    this.GM.LocalData.subscribe(data => {
      this.localData = data;
    });
    this.GM.Data.subscribe(data => {
      this.gameData = data;
    });
    this.pnjService.GetPNJById(this.localData.pnjId).subscribe(data => {
      this.PNJData = data;
      this.localData.playerState = "choix"
      this.DialogResponse = this.PNJData.response.split("£");
      this.localData.choice1 = this.DialogResponse[0];
      this.localData.choice2 = this.DialogResponse[1];
      this.localData.choice3 = this.DialogResponse[2];
      this.GM.dispatchLocal(this.localData);
      
    });
  }

}
