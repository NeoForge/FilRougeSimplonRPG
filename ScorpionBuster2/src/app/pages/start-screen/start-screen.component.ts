import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/apiServices/hero.service';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  constructor(private router: Router, private HeroService: HeroService) { }
  hero: any;
  ngOnInit(): void {

  }

  onStart() {
    let heroChoice = localStorage.getItem('hero');
    if (heroChoice != null) {
      this.router.navigateByUrl('map');
    }
    else {
      let displayMessage = document.getElementById('message') as HTMLElement;
      displayMessage!.innerHTML = 'Veuillez choisir un héro !';
    }
  }
  onBill() {
    let displayMessage = document.getElementById('message') as HTMLElement;
    displayMessage.innerHTML = '“Je suis taré, mais pas seulement.”';
    localStorage.setItem('hero', 'Bill');
  }

  onMarty() {
    let displayMessage = document.getElementById('message') as HTMLElement;
    displayMessage.innerHTML = '“Oh dur, c’est pas le pied !”';
    localStorage.setItem('hero', 'Marty');
  }

}
