import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onStory1() {
    this.router.navigateByUrl('game');
  }
  onStory2() {
    this.router.navigateByUrl('game');
  }
  onStory3() {
    this.router.navigateByUrl('game');
  }
  onStory4() {
    this.router.navigateByUrl('game');
  }
  onStory5() {
    this.router.navigateByUrl('game');
  }
  onStory6() {
    this.router.navigateByUrl('game');
  }
  onStory7() {
    this.router.navigateByUrl('game');
  }
  onStory8() {
    this.router.navigateByUrl('game');
  }
}

