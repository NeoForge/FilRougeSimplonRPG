import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/apiServices/hero.service';
import { GameManager } from 'src/app/helpers/gameManager';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  constructor(private router: Router, private HeroService: HeroService) { }
  localData: any;
  GM = GameManager.getInstance(this.HeroService, parseInt(localStorage.getItem("hero") as string));
  hero: any;
  ngOnInit(): void {
    this.GM.LocalData.subscribe((data: any) => {
      this.localData = data;
    });
    this.GM.Data.subscribe(data => {
      this.hero = data.id;
    });
    localStorage.setItem('inGame', 'false');
    localStorage.setItem("music","false");
    localStorage.setItem("hero","0");
  }

  onStart() {
    let heroChoice = localStorage.getItem('hero');
    localStorage.setItem('inGame', 'true');
    this.localData.whatMusicToPlay = 0;
    if (heroChoice === '2') {
      this.GM = GameManager.getInstance(this.HeroService, 2);
      this.localData.playerState = "indice";
      this.GM.dispatchLocal(this.localData);
      this.router.navigateByUrl('map');
    } else if (heroChoice === '3') {
      this.GM = GameManager.getInstance(this.HeroService, 3);
      this.localData.playerState = "indice";
      this.GM.dispatchLocal(this.localData);
      this.router.navigateByUrl('map');
    }
    else {
      let displayMessage = document.getElementById('message') as HTMLElement;
      displayMessage!.innerHTML = 'Veuillez choisir un héro !';
    }
  }
  onBill() {
    let displayMessage = document.getElementById('message') as HTMLElement;
    displayMessage.innerHTML = '“Je suis taré, mais pas seulement.”';
    localStorage.setItem('hero', '2');
  }

  onMarty() {
    let displayMessage = document.getElementById('message') as HTMLElement;
    displayMessage.innerHTML = '“Oh dur, c’est pas le pied !”';
    localStorage.setItem('hero', '3');
  }


}
