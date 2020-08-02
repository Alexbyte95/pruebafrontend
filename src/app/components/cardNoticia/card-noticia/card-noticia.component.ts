import { Component, OnInit,Input } from '@angular/core';
import {Noticia} from '../../../models/noticia';
import {NoticiasService } from '../../../services/noticias/noticias.service';
@Component({
  selector: 'app-card-noticia',
  templateUrl: './card-noticia.component.html',
  styleUrls: ['./card-noticia.component.css'],

})
export class CardNoticiaComponent implements OnInit {
  @Input() noticia:Noticia;
  constructor(private NoticiasService: NoticiasService ) {

  }

  ngOnInit() {

  }
  guardarNoticia(noticia: Noticia){
    this.NoticiasService.setNoticia(noticia);
  }

}
