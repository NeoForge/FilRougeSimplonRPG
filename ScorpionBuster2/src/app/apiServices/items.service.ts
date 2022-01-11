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

  GetItem() : Observable<any> {
    console.log(this.headers);
    return this.http.get<any>(environment.apiUrl + 'Items',{headers:this.headers});
  }
  GetInventory() : Observable<Item> {
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
    console.log(item);
    return this.http.put<Item>(environment.apiUrl + 'Items/'+item.id,item,{headers:this.headers});
  }
  GetEquippedEquipement() : Observable<Item> {
    return this.http.get<Item>(environment.apiUrl + 'Items/EquippedEquipement',{headers:this.headers});
  }
  SetEquippedWeapon(id:number) : Observable<Item> {
    return this.http.get<Item>(environment.apiUrl + 'Items/weaponEquip/'+id,{headers:this.headers});
  }
  SetEquippedArmor(id:number) : Observable<Item> {
    return this.http.get<Item>(environment.apiUrl + 'Items/armorEquip/'+id,{headers:this.headers});
  }
  UnequipArmor() : Observable<Item> {
    return this.http.get<Item>(environment.apiUrl + 'Items/armorUnequip',{headers:this.headers});
  }
  UnequipWeapon() : Observable<Item> {
    return this.http.get<Item>(environment.apiUrl + 'Items/weaponUnequip',{headers:this.headers});
  }

}
