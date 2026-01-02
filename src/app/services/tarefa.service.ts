import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../app';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private readonly apiUrl = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) {}

  // MÉTODO GET
  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  // MÉTODO POST
  createTarefa(tarefa: Omit<Tarefa, 'id'>): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }
}
