import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroService } from 'src/app/apiServices/hero.service';
import { ItemsService } from 'src/app/apiServices/items.service';

@Component({
  selector: 'app-ng-modal-shop',
  templateUrl: './ng-modal-shop.component.html',
  styleUrls: ['./ng-modal-shop.component.css']
})
export class NgModalShopComponent implements OnInit {
  heroId: number = 0;  
  itemShop: any;
    hero: any;
    description: string = "";

  constructor(public activeModal: NgbActiveModal,private ItemsService:ItemsService, private HeroService: HeroService) { }

  ngOnInit(): void {
    this.ItemsService.GetItem().subscribe(
            (data: any) => {
              this.itemShop = data;
              console.log(this.itemShop);
      }
    );
    if (localStorage.getItem("hero") === "Marty") {
      this.heroId = 5;
    } else if(localStorage.getItem("hero") === "Bill") {
      this.heroId = 6;
    }
    this.HeroService.GetHeroById(this.heroId).subscribe(
      (data: any) => {
        this.hero = data;
        console.log(this.hero);
      });
    }
  choosenItem: number = 0;
  displayDescription(description: string, id: number){
    this.description = description;
    this.choosenItem = id;
  }
  onBuy(){
    if (this.hero.credit >= this.itemShop[this.choosenItem].price){
    this.itemShop[this.choosenItem].ownedQuantity = this.itemShop[this.choosenItem].ownedQuantity + 1;
    this.itemShop[this.choosenItem].owned = true;
    this.ItemsService.PutItem(this.itemShop[this.choosenItem]).subscribe(
            (data: any) => {
              console.log(data);
      }
    );
    this.hero.credit = this.hero.credit - this.itemShop[this.choosenItem].price;
    this.HeroService.PutHero(this.hero).subscribe(
            (data: any) => {
              console.log(data);
      }
    );

    } else {
      alert("You don't have enough credit");
    }
  }
}

