import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/apiServices/hero.service';
import { ItemsService } from 'src/app/apiServices/items.service';

@Component({
  selector: 'app-reset-all',
  templateUrl: './reset-all.component.html',
  styleUrls: ['./reset-all.component.css']
})
export class ResetAllComponent implements OnInit {
  constructor( private router: Router, private HeroService: HeroService, private ItemService: ItemsService) { }
  hero: any;
  itemShop: any;
  ngOnInit(): void {
    this.HeroService.GetHero().subscribe(
      (data: any) => {
        this.hero = data;
        console.log(this.hero);
      })
    this.ItemService.GetItem().subscribe(
      (data: any) => {
        this.itemShop = data;
        console.log(this.itemShop);
      })  
  };
  onQuit() {
    this.itemShop.forEach((element: any) => {
      element.ownedQuantity = 0;
      element.owned = false;
      this.ItemService.PutItem(element).subscribe(
        (data: any) => {
          console.log(data);
        }
      )
    });
    this.hero.forEach((element: any) => {
      element.storyStage = 0;
      element.hp = 100;
      element.attack = 10;
      element.defense = 5;
      element.level = 1;
      element.xp = 0;
      element.didIDo = "";
      element.paSion = 100;
      element.credit = 100;
      this.HeroService.PutHero(element).subscribe(
        (data: any) => {
          console.log(data);
        }
      );
    });
    localStorage.clear();
    this.router.navigateByUrl('');
  }
}
