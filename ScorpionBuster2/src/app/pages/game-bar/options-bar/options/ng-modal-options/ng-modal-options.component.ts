import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ng-modal-options',
  templateUrl: './ng-modal-options.component.html',
  styleUrls: ['./ng-modal-options.component.css']
})
export class NgModalOptionsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit(): void {
  }
  onQuit() {
    localStorage.clear();
    this.router.navigateByUrl('');
    this.activeModal.close('Close click');
  }
}
