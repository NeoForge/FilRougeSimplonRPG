import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/apiServices/hero.service';
import { GameManager } from 'src/app/helpers/gameManager';

@Component({
  selector: 'app-statistics-bar',
  templateUrl: './statistics-bar.component.html',
  styleUrls: ['./statistics-bar.component.css']
})
export class StatisticsBarComponent implements OnInit {

  heroId = localStorage.getItem("hero") as string;
  hero: any;
  sub: any;
  GM = GameManager.getInstance(this.HeroService, parseInt(this.heroId));
  constructor(private HeroService: HeroService, private router: Router) { }
  ngOnInit(): void {
    let bar = document.getElementById("bar") as HTMLDivElement;
    this.sub = this.GM.Data.subscribe(
      (data: any) => {
        this.hero = data;
        bar.style.width = `${this.hero.hp}%`;
      }
    );

  }
  onHit() {
    let bar = document.getElementById("bar") as HTMLDivElement;
    let damage = 10;
    if (this.hero.hp - damage >= 1) {
      this.hero.hp = this.hero.hp - damage;
      this.GM.dispatch(this.hero);
      bar.style.width = `${this.hero.hp}%`;
    } else if (this.hero.hp - damage < 1) {
      this.hero.hp = 0;
      bar.style.width = `${this.hero.hp}%`;
      this.GM.dispatch(this.hero);
      this.router.navigateByUrl('game-over');
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
