import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-bar',
  templateUrl: './game-bar.component.html',
  styleUrls: ['./game-bar.component.css']
})
export class GameBarComponent implements OnInit {
  hero: any;
  constructor() { }

  ngOnInit(): void {
    this.hero = localStorage.getItem('hero');
  }
}
