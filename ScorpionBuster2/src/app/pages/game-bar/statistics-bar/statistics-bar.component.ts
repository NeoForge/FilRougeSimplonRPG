import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/apiServices/hero.service';

@Component({
  selector: 'app-statistics-bar',
  templateUrl: './statistics-bar.component.html',
  styleUrls: ['./statistics-bar.component.css']
})
export class StatisticsBarComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  hero: any;
  ngOnInit(): void {
    this.heroService.GetHeroById(5).subscribe(
      (data: any) => {
        this.hero = data;
        console.log(this.hero);
      }
    );
  }

}
