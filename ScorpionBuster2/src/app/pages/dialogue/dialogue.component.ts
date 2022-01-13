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
  DialogResponse = [];
  DialogArray = [];
  dialogToDisplay = "";

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
      console.log(this.PNJData);
      this.DialogArray = this.PNJData.dialog.split("£");
      console.log(this.DialogArray);
      this.DialogResponse = this.PNJData.response.split("£");
      this.localData.choice1 = this.DialogResponse[0];
      this.localData.choice2 = this.DialogResponse[1];
      this.localData.choice3 = this.DialogResponse[2];
      this.GM.dispatchLocal(this.localData);
      this.choiceLoop();
    });
  }

  timer = (ms: any) => new Promise(res => setTimeout(res, ms));

  async choiceLoop() {

    this.localData.choiceState = "0";
    this.GM.dispatchLocal(this.localData);
    while (this.localData.playerState == "choix" && this.PNJData.stage <= this.DialogArray.length) {
      this.dialogToDisplay = this.DialogArray[this.PNJData.stage - 1];
      await this.timer(500);
      console.log("j'attend la réponse");
      console.log(this.localData.choiceState);
      switch (this.localData.choiceState) {
        case 1:
          {
            console.log("je suis dans le choix 1");

            this.PNJData.stage += 1;
            this.localData.choiceState = "0";
            this.localData.choice1 = "Ok";
            this.localData.choice2 = "Bye bye";
            this.localData.choice3 = "Ciao";
            this.GM.dispatchLocal(this.localData);

            break;
          }
        case 2: {
          console.log("je suis dans le choix 2");
          this.PNJData.stage += 1;
          this.localData.choiceState = "0";
          this.localData.choice1 = "Ok";
          this.localData.choice2 = "Bye bye";
          this.localData.choice3 = "Ciao";
          this.GM.dispatchLocal(this.localData);

          break;
        }
        case 3: {
          console.log("je suis dans le choix 3");
          this.PNJData.stage += 1;
          this.localData.choiceState = "0";
          this.localData.choice1 = "Ok";
          this.localData.choice2 = "Bye bye";
          this.localData.choice3 = "Ciao";
          this.GM.dispatchLocal(this.localData);

          break;
        }
        case 0: {
          break;
        }
      }
      if(this.PNJData.stage > this.DialogArray.length){
      this.onLeave();
      } 
    }
  }
 onLeave(){
    this.localData.playerState="indice";
    this.GM.dispatch(this.gameData);
    this.router.navigateByUrl('/game');
    this.ngOnDestroy();
  }
  ngOnDestroy() {
    this.localData.playerState = "indice";
    this.gameData.storyStage += 1;
    this.GM.dispatch(this.gameData);
    console.log('Destroying...');


  }
}
