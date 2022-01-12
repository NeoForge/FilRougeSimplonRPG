import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { resolveTripleslashReference } from 'typescript';
import { Indice } from '../models/indice';

@Injectable({
  providedIn: 'root'
})
export class IndiceService {

  constructor(private http : HttpClient) { }
  headers = new HttpHeaders({
    "Access-Control-Allow-Origin": '*'
  });

  GetIndice() : Observable<Indice> {
    return this.http.get<Indice>(environment.apiUrl + 'Indice',{headers:this.headers});
  }
  GetIndiceId(id:number) : Observable<Indice> {
    return this.http.get<Indice>(environment.apiUrl + 'Indice/'+id,{headers:this.headers});
  }
}
