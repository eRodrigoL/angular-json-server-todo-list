// src/app/app.ts

import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChangeDetectorRef } from '@angular/core';

import { CardModal } from './components/card-modal/card-modal';

import { TarefaService } from './services/tarefa.service';

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
    MatTooltipModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('angular-json-server-todo-list');

  tarefas: Tarefa[] = [];

  constructor(
    private dialog: MatDialog,
    private tarefaService: TarefaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.tarefaService.lerTarefa().subscribe({
      next: (tarefas) => (this.tarefas = tarefas),
      error: (err) => console.error('Erro ao carregar tarefas', err),
    });
  }

  abrirModalCriar() {
    const dialogRef = this.dialog.open(CardModal, {
      width: '560px',
      maxHeight: '95vw',
      disableClose: true,
      data: {
        modo: 'create',
      },
    });

    dialogRef.afterClosed().subscribe((novaTarefa) => {
      if (novaTarefa) {
        this.tarefas = [...this.tarefas, novaTarefa];

        // 🔥 força atualização imediata da UI
        this.cdr.detectChanges();
      }
    });
  }

  abrirModalVisualizar(tarefa: Tarefa) {
    const dialogRef = this.dialog.open(CardModal, {
      width: '560px',
      maxWidth: '95vw',
      disableClose: true,
      panelClass: 'modal-tarefa-view',
      autoFocus: false,
      data: {
        modo: 'view',
        tarefa,
      },
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado?.deletou) {
        this.tarefas = this.tarefas.filter((t) => t.id !== resultado.id);
        this.cdr.detectChanges();
      }
    });
  }
}
