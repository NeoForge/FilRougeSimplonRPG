import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/apiServices/items.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private items: ItemsService) { }
  ngOnInit(): void {

  }

}
