import { Component, OnInit } from '@angular/core';
import {Noticia} from '../../../models/noticia';
import {NoticiasService } from '../../../services/noticias/noticias.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-noticia-individual',
  templateUrl: './noticia-individual.component.html',
  styleUrls: ['./noticia-individual.component.css']
})
export class NoticiaIndividualComponent implements OnInit {
  noticia:Noticia;
  noticiasInteres: Noticia[];
  constructor(private NoticiasService: NoticiasService,private router: Router) {

      this.noticia = this.NoticiasService.getNoticia();
      this.NoticiasService.getNoticias().subscribe(res => {
        this.noticiasInteres = res.articles;
      });

      if(!this.noticia){
        this.router.navigateByUrl('')
      }
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0)
      });
  }

  ngOnInit() {


  }

  actualizarNoticia(){
    this.noticia = this.NoticiasService.getNoticia();
  }
}
