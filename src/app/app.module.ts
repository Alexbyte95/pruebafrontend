import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {} from './modules/inicio/inicio.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './components/footer/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [

    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
