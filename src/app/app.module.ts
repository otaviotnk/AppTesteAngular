import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importando para HTTPCLIENT
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CursoComponent } from './cursos/curso/curso.component';
import { CursosService } from './cursos/cursos.service';
import { APP_BASE_HREF } from '@angular/common';
import { FooterComponent } from './navegacao/footer/footer.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //Colocar os services aqui
    CursosService,
    {provide: APP_BASE_HREF, useValue: '/'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
