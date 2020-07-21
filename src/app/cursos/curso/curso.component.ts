import { Component, OnInit } from '@angular/core';
import {CursosService} from '../cursos.service';

import {Curso} from '../curso'

import {NgForm} from '@angular/forms';




@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html'
})
export class CursoComponent implements OnInit {    

  constructor(private cursosService: CursosService) { }

  public cursos : Curso[];
  public curso = {} as Curso;

  //Primeira ação quando a página é carregada
  ngOnInit() {    
    this.getCursos();
  }

  //Define se o Curso será somente atualizado ou se será criado
  saveCurso(form: NgForm){
    if(this.curso.id !== undefined){
      this.cursosService.updateCurso(this.curso).subscribe(() =>{
        this.limpaFormulario(form)
      });
      
    }
    else{
      this.cursosService.saveCurso(this.curso).subscribe(() =>{
      this.limpaFormulario(form)
      });
    }
  }

  getCursos2(){
    this.cursosService.getCursos().subscribe(cursos =>{
      this.cursos = cursos;
    });
  }

  getCursos(){
    this.cursosService.getCursos().subscribe((cursos : Curso[])  => {
      this.cursos = cursos
    });    
  }

  deleteCurso(curso: Curso){
    this.cursosService.deleteCurso(curso).subscribe(() =>{
      this.getCursos();
    });    
  }

  updateCurso(curso: Curso){
    this.curso ={... curso};
  }

  limpaFormulario(form: NgForm){
    this.getCursos();
    form.resetForm();
    //???
    this.curso = {} as Curso;
  }








}
 