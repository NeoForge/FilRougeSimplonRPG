import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/apiServices/hero.service';
import { GameManager } from 'src/app/helpers/gameManager';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroId = localStorage.getItem("hero") as string;
  hero: any;
  sub: any;
  GM = GameManager.getInstance(this.HeroService, parseInt(this.heroId));
  constructor(private HeroService: HeroService) { }

  ngOnInit(): void {
    this.sub = this.GM.Data.subscribe(
      (data: any) => {
        this.hero = data;
      }
    );
  }
 ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
