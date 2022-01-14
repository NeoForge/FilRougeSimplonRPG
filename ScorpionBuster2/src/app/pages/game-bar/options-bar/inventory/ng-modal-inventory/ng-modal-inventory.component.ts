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
  itemName: string = "";

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
      }
    );
  }
  choosenItem: number = 0;
  displayDescription(name: string, description: string, id: number) {
    this.description = description;
    this.itemName = name;
    this.choosenItem = id;
  }
  onUse() {
    let txt = document.querySelector(".txt") as HTMLInputElement;
    switch (this.itemInventory[this.choosenItem].itemType) {
      case "potion": {
        let temp = this.itemInventory[this.choosenItem];
        if (this.hero.hp >= 100) {
          txt.innerHTML = "Votre vie est déjà au maximum";
        } else {
          temp.quantity = temp.quantity - 1;
          if (temp.quantity <= 0) {
            temp.owned = false;
          }
          this.ItemsService.PutItem(temp).subscribe(
            (data: any) => {
              this.ItemsService.GetInventory().subscribe(
                (data: any) => {
                  this.itemInventory = data;
                }
              );
            }
          );
          if (this.hero.hp + temp.statValue > 100) {
            this.hero.hp = 100;
          } else {
            this.hero.hp = this.hero.hp + temp.statValue;
          }
          this.GM.dispatch(this.hero);
        }
        break;

      }
      case "weapon": {
        let temp = this.itemInventory[this.choosenItem];
        if (!temp.isEquipped) {
          this.hero.attack = 10;
          this.hero.attack = this.hero.attack + temp.statValue;
          this.ItemsService.SetEquippedWeapon(temp.id).subscribe(
            (data: any) => {
              this.ItemsService.GetInventory().subscribe(
                (data: any) => {
                  this.itemInventory = data;
                  this.GM.dispatch(this.hero);
                }
              );
            });
          txt.innerHTML = `Vous avez équipé ${temp.name}`;
        } else if (temp.isEquipped) {
          this.hero.attack = this.hero.attack - temp.statValue;
          this.ItemsService.UnequipWeapon().subscribe(
            (data: any) => {
              this.ItemsService.GetInventory().subscribe(
                (data: any) => {
                  this.itemInventory = data;
                  this.GM.dispatch(this.hero);
                }
              );
            });
          txt.innerHTML = `Vous avez déséquipé ${temp.name}`;
        }

        break;
      }
      case "armor": {
        let temp = this.itemInventory[this.choosenItem];
        if (!temp.isEquipped) {
          this.hero.defense = 5;
          this.hero.defense = this.hero.defense + temp.statValue;
          this.ItemsService.SetEquippedArmor(temp.id).subscribe(
            (data: any) => {
              this.ItemsService.GetInventory().subscribe(
                (data: any) => {
                  this.itemInventory = data;
                  this.GM.dispatch(this.hero);
                }
              );
            });
          txt.innerHTML = `Vous avez équipé ${temp.name}`;
        } else if (temp.isEquipped) {
          this.hero.defense = this.hero.defense - temp.statValue;
          this.ItemsService.UnequipArmor().subscribe(
            (data: any) => {
              this.ItemsService.GetInventory().subscribe(
                (data: any) => {
                  this.itemInventory = data;
                  this.GM.dispatch(this.hero);
                }
              );
            });
          txt.innerHTML = `Vous avez déséquipé ${temp.name}`;
        }
        break;
      }

    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}