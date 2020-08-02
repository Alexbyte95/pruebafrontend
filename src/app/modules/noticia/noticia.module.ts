import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiaRoutingModule } from './noticia-routing.module';
import { NoticiaIndividualComponent } from '../../components/noticiaIndividual/noticia-individual/noticia-individual.component';
import { CardIndividualComponent } from '../../components/noticiaIndividual/card-individual/card-individual.component';

@NgModule({
  declarations: [
    NoticiaIndividualComponent,
    CardIndividualComponent
  ],
  imports: [
    CommonModule,
    NoticiaRoutingModule
  ]
})
export class NoticiaModule { }
