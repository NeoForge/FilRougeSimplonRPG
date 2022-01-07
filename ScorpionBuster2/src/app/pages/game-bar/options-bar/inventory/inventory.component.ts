import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-inventory',
  templateUrl: './modalInventory.component.html',
  styleUrls: ['./modalInventory.component.css']
})

export class NgbdModalInventory {

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  onInventory() {
    const modalRef = this.modalService.open(NgbdModalInventory);
  }

}
