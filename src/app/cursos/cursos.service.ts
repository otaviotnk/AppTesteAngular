import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Curso} from './curso'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

   //URL da API
  private url = 'https://localhost:44301/api/cursos';

   //Injetando o HttpClient
  constructor(private httpClient: HttpClient) { } 

  // Headers
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  } 

  //Obter todos os cursos
  getCursos(): Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(this.url);
  }

  getCursosPorId(id: number): Observable<Curso>{
    return this.httpClient.get<Curso>(this.url + '/' + id);
  }

  saveCurso(curso : Curso) : Observable<Curso>{
    return this.httpClient.post<Curso>(this.url, JSON.stringify(curso), this.httpOptions);
  }

  updateCurso(curso: Curso): Observable<Curso>{
    return this.httpClient.put<Curso>(this.url + '/' + curso.id, JSON.stringify(curso), this.httpOptions);
  }

  deleteCurso(curso: Curso): Observable<Curso>{
    return this.httpClient.delete<Curso>(this.url +'/' + curso.id, this.httpOptions);
  }
}
