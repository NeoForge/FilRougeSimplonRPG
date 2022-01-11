import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Monster } from '../models/monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    "Access-Control-Allow-Origin": '*'
  });

  GetMonster() : Observable<Monster> {
    return this.http.get<Monster>(environment.apiUrl + 'Monsters',{headers:this.headers});
  }
  GetMonsterById(id:number) : Observable<Monster> {
    return this.http.get<Monster>(environment.apiUrl + 'Monsters/'+id,{headers:this.headers});
  }
}
