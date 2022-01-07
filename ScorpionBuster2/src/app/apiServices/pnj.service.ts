import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PNJ } from '../models/Pnj';

@Injectable({
  providedIn: 'root'
})
export class PNJService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    "Access-Control-Allow-Origin": '*'
  });
  
  GetPNJ() : Observable<PNJ> {
    return this.http.get<any>(environment.apiUrl + 'PNJ',{headers:this.headers});
  }
  GetPNJById(id:number) : Observable<PNJ> {
    return this.http.get<any>(environment.apiUrl + 'PNJ/'+id,{headers:this.headers});
  }
  PutPNJ(pnj:PNJ) : Observable<PNJ> {
    return this.http.put<any>(environment.apiUrl + 'PNJ/'+pnj.id,pnj,{headers:this.headers});
  }
}
