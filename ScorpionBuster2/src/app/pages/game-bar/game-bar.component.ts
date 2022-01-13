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

  ngOnInit(): void {
    this.GM.LocalData.subscribe(data => {
      this.localData = data;
    });
    this.GM.Data.subscribe(data => {
      this.hero = data.id;
    });
    this.onPlay();

  }

  timer = (ms: any) => new Promise(res => setTimeout(res, ms));
  async onPlay() {
    localStorage.setItem('music', 'true');
    let heroMusic = localStorage.getItem('hero');
    if (heroMusic === '2') {
      let audioBill = new Audio();
      audioBill.src = "../../../assets/audio/original-ghostbusters-theme-song.mp3";
      audioBill.volume = 0.2;
      audioBill.load();
      audioBill.play();
      while (localStorage.getItem('inGame')) {
        while (localStorage.getItem('inGame')) {

          if (localStorage.getItem('music') === 'true') {
            audioBill.volume = 0.1;
          } else {
            audioBill.volume = 0;
          }
          await this.timer(500);
        }
      }
    } else if (heroMusic === '3') {
      console.log("Marty");
      let audioMarty = new Audio();
      audioMarty.src = "../../../assets/audio/the-power-of-love.mp3";
      audioMarty.volume = 0.1;
      audioMarty.load();
      audioMarty.play();
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
