import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/apiServices/hero.service';
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
  constructor(private HeroService: HeroService) { }

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
