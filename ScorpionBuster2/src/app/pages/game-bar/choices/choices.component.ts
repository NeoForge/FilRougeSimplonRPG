import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  GM = GameManager.getInstance(this.HeroService, parseInt(localStorage.getItem("hero") as string));
  storyStage = 0;
  indice: any;
  constructor(private HeroService: HeroService, private IndiceService: IndiceService) { }

  ngOnInit(): void {
    this.GM.Data.subscribe(
      (data: any) => {
        this.data = data;
        this.storyStage = data.storyStage;
      }
    );
    this.GM.LocalData.subscribe(
      (data: any) => {
        this.localData = data;
        
      }
    );
    this.IndiceService.GetIndice().subscribe(
      (data: any) => {
        this.indice = data;
      }
    )

  }

  onDialog(nb: number) {
    this.localData.choiceState = nb;
    this.GM.dispatchLocal(this.localData);
  }


  onFight(nb: number) {
    switch (nb) {
      case 1: {
        this.localData.combatState = "attack";
        this.GM.dispatchLocal(this.localData);

        break;
      }
      case 2: {
        this.localData.combatState = "defense";
        this.GM.dispatchLocal(this.localData);

        break;
      }
      case 3: {
        this.localData.combatState = "flee";
        this.GM.dispatchLocal(this.localData);

        break;
      }
    }
  }
}
