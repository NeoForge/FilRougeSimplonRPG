import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/apiServices/hero.service';

@Component({
  selector: 'app-statistics-bar',
  templateUrl: './statistics-bar.component.html',
  styleUrls: ['./statistics-bar.component.css']
})
export class StatisticsBarComponent implements OnInit {
  heroId: number = 0;
  hero: any;
  constructor(private HeroService: HeroService) { }
  ngOnInit(): void {
    if (localStorage.getItem("hero") === "Marty") {
      this.heroId = 5;
    } else if(localStorage.getItem("hero") === "Bill") {
      this.heroId = 6;
    }
    this.HeroService.GetHeroById(this.heroId).subscribe(
      (data: any) => {
        this.hero = data;
        console.log(this.hero);
      }
    );
  }   
}
