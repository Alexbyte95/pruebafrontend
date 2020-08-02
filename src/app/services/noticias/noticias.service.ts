import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../../models/noticia';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  URL = "http://newsapi.org/v2/everything?q=apple&from=2020-08-01&to=2020-08-01&sortBy=popularity&apiKey=efe79552ec83456db6564c1ec305bad8";
  noticia:Noticia;
  constructor(private http: HttpClient) { }


  getNoticias(): Observable<any> {
    return this.http.get(this.URL);
  }
  setNoticia(noticia:Noticia){
    this.noticia = noticia;
  }

  getNoticia():Noticia{
    return this.noticia;
  }

}
