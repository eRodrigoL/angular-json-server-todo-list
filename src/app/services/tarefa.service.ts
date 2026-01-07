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

  // CRUD

  // MÉTODO POST (Create)
  criarTarefa(tarefa: Omit<Tarefa, 'id'>): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }

  // MÉTODO GET (Read)
  lerTarefa(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  // MÉTODO PUT (Update)
  editarTarefa(id: number, tarefa: Omit<Tarefa, 'id'>) {
    return this.http.put<Tarefa>(`${this.apiUrl}/${id}`, tarefa);
  }

  // MÉTODO DELETE (Delete)
  deletarTarefa(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
