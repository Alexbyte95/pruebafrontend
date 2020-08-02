import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CardNoticiaComponent } from '../../components/cardNoticia/card-noticia/card-noticia.component';
import { InicioComponent } from '../../components/inicio/inicio/inicio.component';

@NgModule({
  declarations: [
    InicioComponent,
    CardNoticiaComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
