import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from 'src/app/apiServices/items.service';
import { Item } from 'src/app/models/items';
import { NgModalShopComponent } from './ng-modal-shop/ng-modal-shop.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }
  onShop() {
    this.modalService.open(NgModalShopComponent);

  }

}
