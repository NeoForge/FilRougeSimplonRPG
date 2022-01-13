import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/apiServices/hero.service';
import { GameManager } from 'src/app/helpers/gameManager';

@Component({
  selector: 'app-game-bar',
  templateUrl: './game-bar.component.html',
  styleUrls: ['./game-bar.component.css']
})
export class GameBarComponent implements OnInit {

  constructor(private heroService : HeroService) { }

  GM = GameManager.getInstance(this.heroService, parseInt(localStorage.getItem("hero") as string));
  localData: any;
  ngOnInit(): void {
    this.GM.LocalData.subscribe(data => {
      this.localData = data;
    });
  }
}
