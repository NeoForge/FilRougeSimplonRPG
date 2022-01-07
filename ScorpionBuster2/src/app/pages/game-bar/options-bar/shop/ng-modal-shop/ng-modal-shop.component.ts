import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from 'src/app/apiServices/items.service';

@Component({
  selector: 'app-ng-modal-shop',
  templateUrl: './ng-modal-shop.component.html',
  styleUrls: ['./ng-modal-shop.component.css']
})
export class NgModalShopComponent implements OnInit {
    itemShop: any;
    salut = "salut";
  constructor(public activeModal: NgbActiveModal,private ItemsService:ItemsService) { }

  ngOnInit(): void {
    console.log("yo");
    this.ItemsService.GetItem().subscribe(
            (data: any) => {
              this.itemShop = data;
              console.log(this.itemShop);
      }
    );
  }
}
