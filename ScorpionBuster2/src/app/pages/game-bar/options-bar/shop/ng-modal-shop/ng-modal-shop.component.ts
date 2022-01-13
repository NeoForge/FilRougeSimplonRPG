import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroService } from 'src/app/apiServices/hero.service';
import { ItemsService } from 'src/app/apiServices/items.service';
import { GameManager } from 'src/app/helpers/gameManager';

@Component({
  selector: 'app-ng-modal-shop',
  templateUrl: './ng-modal-shop.component.html',
  styleUrls: ['./ng-modal-shop.component.css']
})
export class NgModalShopComponent implements OnInit {
  heroId = localStorage.getItem("hero") as string;
  GM = GameManager.getInstance(this.HeroService, parseInt(this.heroId));
  sub: any;
  itemShop: any;
  hero: any;
  description: string = "";
  itemName: string = "";
  price: number = 0;
  
  constructor(public activeModal: NgbActiveModal, private ItemsService: ItemsService, private HeroService: HeroService) { }

  ngOnInit(): void {
    this.sub = this.GM.Data.subscribe(
      (data: any) => {
        this.hero = data;
      }
    );
    this.ItemsService.GetShop().subscribe(
      (data: any) => {
        this.itemShop = data;
      }
    );
  }
  choosenItem: number = 0;
  displayDescription(name: string, description: string, id: number) {
    this.itemName = name;
    this.description = description;
    this.price = this.itemShop[id].price;
    this.choosenItem = id;
  }
  onBuy() {
    if (this.hero.credit >= this.itemShop[this.choosenItem].price) {
      if(this.itemShop[this.choosenItem].quantity >0) {
      this.itemShop[this.choosenItem].quantity = this.itemShop[this.choosenItem].quantity + 1;
      }else{
        this.itemShop[this.choosenItem].quantity = 1;
      }
      this.itemShop[this.choosenItem].owned = true;
      this.ItemsService.PutItem(this.itemShop[this.choosenItem]).subscribe(
        (data: any) => {
        }  
      );
      document.getElementById("txt")!.innerHTML = "Vous avez acheté " + this.itemShop[this.choosenItem].name + " pour " + this.itemShop[this.choosenItem].price + " de pa$$ion.";
      this.hero.credit = this.hero.credit - this.itemShop[this.choosenItem].price;
      this.GM.dispatch(this.hero);
    } else {
      let random = Math.round(Math.random());
      if (random === 0) {
      document.getElementById("txt")!.innerHTML = "Vous n'avez pas assez de Pa$$ion !";
      } else {
       document.getElementById("txt")!.innerHTML = "Il vous faut plus de pa$$ion !";
      }
    }
  }
}

