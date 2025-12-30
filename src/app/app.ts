// src/app/app.ts

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

export interface Tarefa {
  id: number;
  dataLimite: string | Date;
  resumo: string;
  descricao: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatGridListModule, MatCardModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-json-server-todo-list');
  tarefas: Tarefa[] = [
    {
      id: 1,
      dataLimite: '25/04/2026',
      resumo: 'Consulta com Dra Ana',
      descricao:
        'Consulta médica com a Dra Ana (NECESSÁRIO levar resultado dos exames solicitados)',
    },
    {
      id: 2,
      dataLimite: '03/08/2026',
      resumo: 'Renovar CNH',
      descricao: 'Renovar CNH antes do vencimento 2 meses após',
    },
    {
      id: 3,
      dataLimite: '05/01/2026',
      resumo: 'Pagar conta de luz',
      descricao: 'Valor: R$ 268,41',
    },
  ];
}
