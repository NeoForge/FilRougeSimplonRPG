import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/apiServices/hero.service';

@Component({
  selector: 'app-statistics-bar',
  templateUrl: './statistics-bar.component.html',
  styleUrls: ['./statistics-bar.component.css']
})
export class StatisticsBarComponent implements OnInit {
  heroId: number = 0;
  hero: any;
  constructor(private HeroService: HeroService, private router:Router) { }
  ngOnInit(): void {
    if (localStorage.getItem("hero") === "Marty") {
      this.heroId = 5;
    } else if (localStorage.getItem("hero") === "Bill") {
      this.heroId = 6;
    }
    this.HeroService.GetHeroById(this.heroId).subscribe(
      (data: any) => {
        this.hero = data;
        console.log(this.hero);
      }
    );
  }
  onHit() {
    let bar = document.getElementById("bar") as HTMLDivElement;
    let damage = 10;
    if (this.hero.hp - damage >= 1) {
      this.hero.hp = this.hero.hp - damage;
      this.HeroService.PutHero(this.hero).subscribe(
        (data: any) => {
          console.log(data);
        }
      );
      bar.style.width = `${this.hero.hp}%`;
    } else if (this.hero.hp - damage < 1) {
      this.hero.hp = 0;
      bar.style.width = `${this.hero.hp}%`;
      this.HeroService.PutHero(this.hero).subscribe(
        (data: any) => {
          console.log(data);
        }
      );
      this.router.navigateByUrl('game-over');
    }
  }
}
