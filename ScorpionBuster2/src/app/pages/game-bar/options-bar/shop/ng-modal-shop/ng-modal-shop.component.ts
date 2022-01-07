import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroService } from 'src/app/apiServices/hero.service';
import { ItemsService } from 'src/app/apiServices/items.service';
import { Hero } from 'src/app/models/hero';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-ng-modal-shop',
  templateUrl: './ng-modal-shop.component.html',
  styleUrls: ['./ng-modal-shop.component.css']
})
export class NgModalShopComponent implements OnInit {
    itemShop: any;
    description: string = "";

  constructor(public activeModal: NgbActiveModal,private ItemsService:ItemsService, private HeroService: HeroService) { }

  ngOnInit(): void {
    this.ItemsService.GetItem().subscribe(
            (data: any) => {
              this.itemShop = data;
              console.log(this.itemShop);
      }
    );
  }
  choosenItem: number = 0;
  displayDescription(description: string, id: number){
    this.description = description;
    this.choosenItem = id;
  }
  onBuy(){
    this.itemShop[this.choosenItem].ownedQuantity = this.itemShop[this.choosenItem].ownedQuantity + 1;
    this.itemShop[this.choosenItem].owned = true;
    this.ItemsService.PutItem(this.itemShop[this.choosenItem]).subscribe(
            (data: any) => {
              console.log(data);
      }
    );
  }
}
