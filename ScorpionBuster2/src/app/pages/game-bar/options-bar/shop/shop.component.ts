import { Component, OnInit, Input, Injectable } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from 'src/app/apiServices/items.service';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'ngbd-modal-shop',
  templateUrl: './modalShop.component.html',
  styleUrls: ['./modalShop.component.css']
})

export class NgbdModalShop {

  constructor(public activeModal: NgbActiveModal,private ItemsService:ItemsService) {}
  itemShop: any;
  salut = "salut";
  ngOnInit() {
    this.ItemsService.GetItem().subscribe(
      (data: any) => {
        this.itemShop = data;
        console.log(this.itemShop);
      }
    );
  }
}

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
    let modalRef = this.modalService.open(NgbdModalShop);
  }

}
