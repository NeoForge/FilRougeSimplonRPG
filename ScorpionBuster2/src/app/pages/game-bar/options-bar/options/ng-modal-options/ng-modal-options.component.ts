import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HeroService } from 'src/app/apiServices/hero.service';
import { ItemsService } from 'src/app/apiServices/items.service';
import { PNJService } from 'src/app/apiServices/pnj.service';
import { GameManager } from 'src/app/helpers/gameManager';

@Component({
  selector: 'app-ng-modal-options',
  templateUrl: './ng-modal-options.component.html',
  styleUrls: ['./ng-modal-options.component.css']
})
export class NgModalOptionsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private router: Router, private HeroService: HeroService, private ItemService: ItemsService,private PnjService: PNJService) { }
  hero: any;
  itemShop: any;
  GM = GameManager.getInstance(this.HeroService, parseInt(localStorage.getItem('hero') as string));
  localData:any;
  ngOnInit(): void {
    this.HeroService.GetHero().subscribe(
      (data: any) => {
        this.hero = data;
        console.log(this.hero);
      })
    this.ItemService.GetItem().subscribe(
      (data: any) => {
        this.itemShop = data;
        console.log(this.itemShop);
      }) 
    this.GM.LocalData.subscribe(data => {
      this.localData = data;
    })

  };
  onQuit() {
    this.itemShop.forEach((element: any) => {
      element.quantity = 0;
      element.owned = false;
      element.isEquipped = false;
      this.ItemService.PutItem(element).subscribe(
        (data: any) => {
          console.log(data);
        }
      )
    });
    this.hero.forEach((element: any) => {
      element.storyStage = 0;
      element.hp = 100;
      element.attack = 10;
      element.defense = 5;
      element.level = 1;
      element.xp = 0;
      element.didIDo = "";
      element.paSion = 100;
      element.credit = 100;
      this.HeroService.PutHero(element).subscribe(
        (data: any) => {
          console.log(data);
        }
      );
    });
    this.PnjService.ResetPNJ().subscribe(data => {
      console.log(data);    
    })
    this.localData.playerState = 'startmenu';
    this.GM.dispatchLocal(this.localData);    
    localStorage.clear();
    this.router.navigateByUrl('');
    this.activeModal.close('Close click');
  }
}
