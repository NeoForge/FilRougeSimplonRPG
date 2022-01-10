import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroService } from 'src/app/apiServices/hero.service';
import { ItemsService } from 'src/app/apiServices/items.service';
import { GameManager } from 'src/app/helpers/gameManager';

@Component({
  selector: 'app-ng-modal-inventory',
  templateUrl: './ng-modal-inventory.component.html',
  styleUrls: ['./ng-modal-inventory.component.css']
})
export class NgModalInventoryComponent implements OnInit {
  itemInventory: any;
  description: string = "";

  constructor(public activeModal: NgbActiveModal, private ItemsService: ItemsService, private HeroService: HeroService) { }
  heroId = localStorage.getItem("hero") as string;
  hero: any;
  sub: any;
  GM = GameManager.getInstance(this.HeroService, parseInt(this.heroId));

  ngOnInit(): void {
    this.sub = this.GM.Data.subscribe(
      (data: any) => {
        this.hero = data;
      }
    );
    this.ItemsService.GetInventory().subscribe(
      (data: any) => {
        this.itemInventory = data;
        console.log(this.itemInventory);
      }
    );
  }
  choosenItem: number = 0;
  displayDescription(description: string, id: number) {
    this.description = description;
    this.choosenItem = id;
  }
  onUse() {
    console.log(this.itemInventory[this.choosenItem].owned_quantity);
    switch (this.itemInventory[this.choosenItem].itemType) {
      case "potion": {
        let temp = this.itemInventory[this.choosenItem];
        temp.owned_quantity = temp.owned_quantity - 1;
        if (temp.owned_quantity <= 0) {
          temp.owned = false;
        }
        this.ItemsService.PutItem(temp).subscribe(
          (data: any) => {
          }
        );
        if(this.hero.hp + temp.statValue > 100) {
        
          this.hero.hp = 100;
        }else{
          this.hero.hp = this.hero.hp + temp.statValue;
        }
        this.GM.dispatch(this.hero);
        this.ItemsService.GetInventory().subscribe(
          (data: any) => {
            this.itemInventory = data;
          }
        );
        break;

      }
      case "weapon": {
        break;
      }
      case "armor": {
        break;
      }

    }
  }
    ngOnDestroy() {
      this.sub.unsubscribe();
    }
  }