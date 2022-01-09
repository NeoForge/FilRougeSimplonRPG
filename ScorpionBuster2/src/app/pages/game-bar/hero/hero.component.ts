import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/apiServices/hero.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroId: number = 0;
  hero: any;
  constructor(private HeroService: HeroService) { }

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

}
