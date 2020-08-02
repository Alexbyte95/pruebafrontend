import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiaIndividualComponent } from '../../components/noticiaIndividual/noticia-individual/noticia-individual.component';
const routes: Routes = [
  {
    path: '',
    component: NoticiaIndividualComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiaRoutingModule { }
