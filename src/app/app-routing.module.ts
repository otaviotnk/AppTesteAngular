import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoComponent } from './cursos/curso/curso.component';

//Rotas das páginas criadas
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'cursos', component: CursoComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
