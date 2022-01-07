import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/apiServices/items.service';
import { Item } from 'src/app/models/items';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private items: ItemsService) { }
  ngOnInit(): void {
    this.items.GetItem().subscribe((data:any) => {
      console.log(data);
    });
  }

}
