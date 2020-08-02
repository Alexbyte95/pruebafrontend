import { Component, OnInit , Input ,Output,EventEmitter } from '@angular/core';
import {Noticia} from '../../../models/noticia';
import {NoticiasService } from '../../../services/noticias/noticias.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-individual',
  templateUrl: './card-individual.component.html',
  styleUrls: ['./card-individual.component.css']
})
export class CardIndividualComponent implements OnInit {
  @Input() noticia:Noticia;
  @Output() cambioNoticia = new EventEmitter<string>();
  constructor(private NoticiasService: NoticiasService, private router: Router) { }

  ngOnInit() {
  }
  guardarNoticia(noticia: Noticia){
    this.NoticiasService.setNoticia(noticia);
    this.router.navigateByUrl('/noticia/'+noticia.title);
    this.cambioNoticia.emit();
  }
}
