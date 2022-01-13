import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    "Access-Control-Allow-Origin": '*'
  });
  GetHero() : Observable<Hero> {
    return this.http.get<Hero>(environment.apiUrl + 'Heroes',{headers:this.headers});
  }
  GetHeroById(id:number) : Observable<Hero> {
    
    if(id == 2 || id == 3){
    
      return this.http.get<Hero>(environment.apiUrl + 'Heroes/'+id,{headers:this.headers});
    }
    else
    {
      return this.http.get<Hero>(environment.apiUrl + 'Heroes/2',{headers:this.headers});
    }
  }
  PutHero(hero:any) : Observable<Hero> {
    return this.http.put<Hero>(environment.apiUrl + 'Heroes/'+hero.id,hero,{headers:this.headers});
  }
}
