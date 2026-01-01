// src/app/app.ts

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { CardModal } from './components/card-modal/card-modal';

export interface Tarefa {
  id: number;
  dataLimite: string | Date;
  resumo: string;
  descricao: string;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-json-server-todo-list');

  constructor(private dialog: MatDialog) {}

  abrirModalCriar() {
    this.dialog.open(CardModal, {
      width: '560px',
      maxHeight: '95vw',
      disableClose: true,
    });
  }

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
