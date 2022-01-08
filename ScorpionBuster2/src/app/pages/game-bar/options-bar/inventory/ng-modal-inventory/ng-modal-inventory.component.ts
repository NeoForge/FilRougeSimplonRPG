import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from 'src/app/apiServices/items.service';

@Component({
  selector: 'app-ng-modal-inventory',
  templateUrl: './ng-modal-inventory.component.html',
  styleUrls: ['./ng-modal-inventory.component.css']
})
export class NgModalInventoryComponent implements OnInit {
  itemInventory: any;
  description: string = "";

  constructor(public activeModal: NgbActiveModal, private ItemsService: ItemsService) { }

  ngOnInit(): void {
    this.ItemsService.GetInventory().subscribe(
      (data: any) => {
        this.itemInventory = data;
        console.log(this.itemInventory);
      }
    );
  }
  choosenItem: number = 0;
  displayDescription(description: string, id: number){
    this.description = description;
    this.choosenItem = id;
  }
  onUse() {
    this.itemInventory[this.choosenItem].owned_quantity = this.itemInventory[this.choosenItem].owned_quantity - 1;
    this.itemInventory[this.choosenItem].owned = false;
    this.ItemsService.PutItem(this.itemInventory[this.choosenItem]).subscribe(
            (data: any) => {
              console.log("OnUse :",data);
      }
    );

  }

}
