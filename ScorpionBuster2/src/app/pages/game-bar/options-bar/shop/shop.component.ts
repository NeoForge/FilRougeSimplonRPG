import { Component, OnInit, Input, Injectable } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modalShop.component.html',
  styleUrls: ['./modalShop.component.css']
})

export class NgbdModalContent {

  constructor(public activeModal: NgbActiveModal) {}
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
    const modalRef = this.modalService.open(NgbdModalContent);
  }

}
