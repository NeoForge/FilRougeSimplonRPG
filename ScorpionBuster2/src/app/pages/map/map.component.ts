import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapService } from 'src/app/apiServices/map.service';

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
    localStorage.setItem('mapId', '1');
  }
  onStory2() {
    this.router.navigateByUrl('game');
    localStorage.setItem('mapId', '2');
  }
  onStory3() {
    this.router.navigateByUrl('game');
    localStorage.setItem('mapId', '3');
  }
  onStory4() {
    this.router.navigateByUrl('game');
    localStorage.setItem('mapId', '4');
  }
  onStory5() {
    this.router.navigateByUrl('game');
    localStorage.setItem('mapId', '5');
  }
  onStory6() {
    this.router.navigateByUrl('game');
    localStorage.setItem('mapId', '6');
  }
  onStory7() {
    this.router.navigateByUrl('game');
    localStorage.setItem('mapId', '7');
  }
  onStory8() {
    this.router.navigateByUrl('game');
    localStorage.setItem('mapId', '8');
  }
}

