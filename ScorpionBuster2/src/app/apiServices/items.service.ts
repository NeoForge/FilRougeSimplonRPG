import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http : HttpClient) { }
  headers = new HttpHeaders({
    "Access-Control-Allow-Origin": '*'
  });

  GetItem() : Observable<Item> {
    console.log(this.headers);
    return this.http.get<Item>(environment.apiUrl + 'Items',{headers:this.headers});
  }
  GetInvotory() : Observable<Item> {
    return this.http.get<Item>(environment.apiUrl + 'Items/Inventory',{headers:this.headers});
  }
  GetShop() : Observable<Item> {
    return this.http.get<Item>(environment.apiUrl + 'Items/Shop',{headers:this.headers});
  }
  GetConsommable() : Observable<Item> {
    return this.http.get<Item>(environment.apiUrl + 'Items/Consommable',{headers:this.headers});
  }
  GetItemById(id:number) : Observable<Item> {
    return this.http.get<Item>(environment.apiUrl + 'Items/'+id,{headers:this.headers});
  }
  PutItem(item:Item) : Observable<Item> {
    return this.http.put<Item>(environment.apiUrl + 'Items/'+item.id,item,{headers:this.headers});
  }

}
