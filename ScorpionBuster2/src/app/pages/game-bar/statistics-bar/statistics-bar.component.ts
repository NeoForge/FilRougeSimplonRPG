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
    this.sub = this.GM.Data.subscribe(
      (data: any) => {
        this.hero = data;
        this.changeHPbar();
      }
    );
  }
  onHit() {
    let damage = 10;
    if (this.hero.hp - damage >= 1) {
      this.hero.hp = this.hero.hp - damage;
      this.changeHPbar();
      this.GM.dispatch(this.hero);

    } else if (this.hero.hp - damage < 1) {
      this.hero.hp = 0;
      this.changeHPbar();
      this.GM.dispatch(this.hero);
      this.router.navigateByUrl('game-over');
    }
  }

  changeHPbar() {
    let bar = document.getElementById("bar") as HTMLDivElement;
    bar.style.width = `${this.hero.hp}%`;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
