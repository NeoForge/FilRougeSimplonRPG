import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/apiServices/hero.service';
import { GameManager } from 'src/app/helpers/gameManager';

@Component({
  selector: 'app-game-bar',
  templateUrl: './game-bar.component.html',
  styleUrls: ['./game-bar.component.css']
})
export class GameBarComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  GM = GameManager.getInstance(this.heroService, parseInt(localStorage.getItem("hero") as string));
  localData: any;
  hero: any;
  audioMartyArray =["../../../assets/audio/the-power-of-love.mp3","../../../assets/audio/original-ghostbusters-theme-song.mp3"];
  audioBillArray =["../../../assets/audio/original-ghostbusters-theme-song.mp3","../../../assets/audio/the-power-of-love.mp3"];

  ngOnInit(): void {
    this.GM.LocalData.subscribe(data => {
      this.localData = data;
    });
    this.GM.Data.subscribe(data => {
      this.hero = data.id;
    });
    
  }
  
  timer = (ms: any) => new Promise(res => setTimeout(res, ms));
  async onPlay() {
    localStorage.setItem('music', 'true');
    let heroMusic = localStorage.getItem('hero');
    if (heroMusic === '2') {
      let audioBill = new Audio();
      audioBill.src = this.audioBillArray[this.localData.whatMusicToPlay];
      audioBill.volume = 0.2;
      audioBill.load();
      if(this.localData.isPlaying == false)
      {
        audioBill.play();
        this.localData.isPlaying = true;
        this.GM.dispatchLocal(this.localData);
      }
        while (localStorage.getItem('inGame')) {
          if (localStorage.getItem('music') === 'true') {
            audioBill.volume = 0.1;
          } else {
            audioBill.volume = 0;
          }
          if(localStorage.getItem("musicChange")==="true")
          {
            audioBill.pause();
            audioBill.src = this.audioBillArray[this.localData.whatMusicToPlay];
            audioBill.volume = 0.1;
            audioBill.load();
            audioBill.play();
            localStorage.setItem("musicChange","false");
          }
          await this.timer(500);
      }
    } else if (heroMusic === '3') {
      let audioMarty = new Audio();
      audioMarty.src = "../../../assets/audio/the-power-of-love.mp3";
      audioMarty.volume = 0.1;
      audioMarty.load();
      console.log(this.localData.isPlaying);
      
      if(this.localData.isPlaying == false)
      {
        audioMarty.play();
        this.localData.isPlaying = true;
        this.GM.dispatchLocal(this.localData);
      }
      while (localStorage.getItem('inGame')) {

        if (localStorage.getItem('music') === 'true') {
          audioMarty.volume = 0.1;
        } else {
          audioMarty.volume = 0;
        }
        
        await this.timer(500);
      }

    } else {
      console.log("no audio");
    }
  }
}
