import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/apiServices/hero.service';
import { ItemsService } from 'src/app/apiServices/items.service';
import { GameManager } from 'src/app/helpers/gameManager';

@Component({
  selector: 'app-statistics-bar',
  templateUrl: './statistics-bar.component.html',
  styleUrls: ['./statistics-bar.component.css']
})
export class StatisticsBarComponent implements OnInit {
  itemInventory: any;
  heroId = localStorage.getItem("hero") as string;
  hero: any;
  sub: any;
  GM = GameManager.getInstance(this.HeroService, parseInt(this.heroId));
  constructor(private HeroService: HeroService, private ItemsService : ItemsService, private router: Router) { }
  ngOnInit(): void {
    this.sub = this.GM.Data.subscribe(
      (data: any) => {
        this.hero = data;
        this.changeHPbar();
      }
    );
    this.ItemsService.GetInventory().subscribe(
      (data: any) => {
        this.itemInventory = data;
      }
    );
  }

  changeHPbar() {
    let bar = document.getElementById("bar") as HTMLElement;
    bar.style.width = `${this.hero.hp}%`;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
