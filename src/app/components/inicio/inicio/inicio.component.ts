import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../../../models/noticia';
import { NoticiasService } from '../../../services/noticias/noticias.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [


    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('250ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),

      ]),
    ])


  ]

})
export class InicioComponent implements OnInit {
  noticias: Noticia[];

  constructor(private NoticiasService: NoticiasService) {
    this.NoticiasService.getNoticias().subscribe(res => {
      this.noticias = res.articles;
    });

  }

  ngOnInit() {
  }

}
