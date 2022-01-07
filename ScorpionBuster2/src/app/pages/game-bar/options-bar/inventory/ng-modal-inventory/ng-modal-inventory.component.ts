import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ng-modal-inventory',
  templateUrl: './ng-modal-inventory.component.html',
  styleUrls: ['./ng-modal-inventory.component.css']
})
export class NgModalInventoryComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
