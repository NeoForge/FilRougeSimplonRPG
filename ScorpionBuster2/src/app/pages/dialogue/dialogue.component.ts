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
  backgroundDialog = "  ";
  ngOnInit(): void {
    this.GM.LocalData.subscribe(data => {
      this.localData = data;
      console.log(this.localData);
    });
    this.GM.Data.subscribe(data => {
      this.gameData = data;
    });
    this.pnjService.GetPNJById(this.localData.pnjId).subscribe(data => {
      this.PNJData = data;
      this.localData.playerState = "choix"
      this.DialogArray = this.PNJData.dialog.split("£");
      this.DialogResponse = this.PNJData.response.split("£");
      this.localData.choice1 = this.DialogResponse[0];
      this.localData.choice2 = this.DialogResponse[1];
      this.localData.choice3 = this.DialogResponse[2];
      this.GM.dispatchLocal(this.localData);
      this.choiceLoop();
      this.backgroundDialog ="background-image : url(" + '../../../assets/' + localStorage.getItem("background") + ")";
    });
  }

  timer = (ms: any) => new Promise(res => setTimeout(res, ms));

  async choiceLoop() {
    this.localData.choiceState = "0";
    this.GM.dispatchLocal(this.localData);
    while (this.localData.playerState == "choix" && this.PNJData.stage <= this.DialogArray.length) {
      this.dialogToDisplay = this.DialogArray[this.PNJData.stage - 1];
      await this.timer(1000);
      switch (this.localData.choiceState) {
        case 1:
          {

            this.PNJData.stage += 1;
            this.localData.choiceState = "0";
            this.localData.choice1 = "Ok";
            this.localData.choice2 = "Bye bye";
            this.localData.choice3 = "Ciao";
            this.GM.dispatchLocal(this.localData);

            break;
          }
        case 2: {
          this.PNJData.stage += 1;
          this.localData.choiceState = "0";
          this.localData.choice1 = "Ok";
          this.localData.choice2 = "Bye bye";
          this.localData.choice3 = "Ciao";
          this.GM.dispatchLocal(this.localData);

          break;
        }
        case 3: {
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
      if (this.PNJData.stage > this.DialogArray.length) {

        if (!this.leaving) {
          this.onLeave();
          this.leaving = true
        }
      }
    }
  }
  leaving = false;
  onLeave() {
    this.localData.playerState = "indice";
    this.PNJData.appeared = true;
    this.PNJData.stage = 1;
    this.pnjService.PutPNJ(this.PNJData).subscribe(data => {
      this.gameData.storyStage += 1;
      console.log("Story Stage On Leave(after +1 ) = ",this.gameData.storyStage);
      console.log("Story Stage Before Dialog",this.localData.storyStageBeforeDialog);
      
      if(this.gameData.storyStage == this.localData.storyStageBeforeDialog + 1 ){
        console.log("StoryStage que je vais save",this.gameData.storyStage);
        this.GM.dispatch(this.gameData);
      }
      else
      {
        this.gameData.storyStage = this.localData.storyStageBeforeDialog +1;
        console.log("StoryStage que je vais save",this.gameData.storyStage);
        this.GM.dispatch(this.gameData);
      }
      if(this.gameData.storyStage >= 8) {
        this.localData.playerState = "startmenu"
        this.router.navigateByUrl('/victory')
      }
      else if (this.PNJData.monsterId != null || this.PNJData.monsterId != undefined || this.PNJData.monsterId < 0) {
        this.onFight(this.PNJData.monsterId);
        this.ngOnDestroy();
      }
      else {
        this.router.navigateByUrl('/game');
        this.ngOnDestroy();
      }
      this.ngOnDestroy();
    })
    
  }
  ngOnDestroy() {
    this.localData.playerState = "indice";
  }
  onFight(monsterId: number) {
    this.localData.monsterId = monsterId;
    this.GM.dispatchLocal(this.localData);
    this.router.navigateByUrl('fight')
  }
}
