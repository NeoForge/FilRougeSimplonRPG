import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Map } from '../models/map';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders({
    "Access-Control-Allow-Origin": '*'
  });

  GetMap() : Observable<Map> {
    return this.http.get<Map>(environment.apiUrl + 'Map',{headers:this.headers});
  }

  GetMapByid(id:number) : Observable<Map> {
    return this.http.get<Map>(environment.apiUrl + 'Map/'+id,{headers:this.headers});
  }

  PutMap(map:Map) : Observable<Map> {
    return this.http.put<Map>(environment.apiUrl + 'Map/'+map.id,map,{headers:this.headers});
  }
}
