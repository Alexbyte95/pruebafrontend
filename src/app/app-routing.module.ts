import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/inicio/inicio.module#InicioModule'
  },
  {
    path: 'noticia/:id',
    loadChildren: './modules/noticia/noticia.module#NoticiaModule'
  },
  { path: '**', redirectTo: '/' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
