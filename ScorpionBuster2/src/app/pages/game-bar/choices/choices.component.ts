import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/apiServices/hero.service';
import { IndiceService } from 'src/app/apiServices/indice.service';
import { GameManager } from 'src/app/helpers/gameManager';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {
  localData: any;
  data: any;
  storyStage = 2;
  GM = GameManager.getInstance(this.HeroService, parseInt(localStorage.getItem("hero") as string));
  indice: any;
  constructor(private HeroService: HeroService, private IndiceService: IndiceService) { }

  ngOnInit(): void {
    this.GM.Data.subscribe(
      (data: any) => {
        this.data = data;
        this.storyStage = this.data.storyStage;
      }
    );
    this.GM.LocalData.subscribe(
      (data: any) => {
        this.localData = data;

      }
    );
    this.IndiceService.GetIndiceId(this.storyStage).subscribe(
      (data: any) => {
        this.indice = data;
        console.log("tab indices :", this.indice);
      }
    );

  }

  onDialog(nb : number)
  {
    this.localData.choiceState = nb;
  }


  onFight(nb: number) {
    switch (nb) {
      case 1: {
        this.localData.combatState = "attack";
        break;
      }
      case 2: {
        this.localData.combatState = "defense";
        break;
      }
      case 3: {
        this.localData.combatState = "flee";
        break;
      }
    }
  }
}
