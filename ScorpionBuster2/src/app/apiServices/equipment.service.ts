import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipment } from '../models/equipment';
@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    "Access-Control-Allow-Origin": '*'
  });
  GetEquipment() : Observable<Equipment> {
    return this.http.get<Equipment>(environment.apiUrl + 'Equipment',{headers:this.headers});
  }
  GetEquipmentById(id:number) : Observable<Equipment> {
    return this.http.get<Equipment>(environment.apiUrl + 'Equipment/'+id,{headers:this.headers});
  }
  GetEquipmentOwned() : Observable<Equipment> {
    return this.http.get<Equipment>(environment.apiUrl + 'Equipment/Owned',{headers:this.headers});
  }
  GetEquipmentOwnedEquipped() : Observable<Equipment> {
    return this.http.get<Equipment>(environment.apiUrl + 'Equipment/OwnedEquipped',{headers:this.headers});
  }
  GetEquipmentOwnedUnEquipped() : Observable<Equipment> {
    return this.http.get<Equipment>(environment.apiUrl + 'Equipment/OwnedUnequipped',{headers:this.headers});
  }
  
}
