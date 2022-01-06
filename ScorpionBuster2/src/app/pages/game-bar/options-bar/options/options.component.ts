import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modalOptions.component.html',
  styleUrls: ['./modalOptions.component.css']
})

export class NgbdModalContent {

  constructor(public activeModal: NgbActiveModal) {}
}
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  onOptions() {
    const modalRef = this.modalService.open(NgbdModalContent);
  }

}
