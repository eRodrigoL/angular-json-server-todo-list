// src/app/components/card-modal/card-modal.ts

import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgClass } from '@angular/common';

export interface CardModalData {
  modo: 'create' | 'view';
  tarefa?: {
    id: number;
    dataLimite: string | Date;
    resumo: string;
    descricao: string;
  };
}

@Component({
  selector: 'app-card-modal',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    NgClass,
  ],
  templateUrl: './card-modal.html',
  styleUrl: './card-modal.scss',
})
export class CardModal {
  modo: 'create' | 'view';
  tarefa?: CardModalData['tarefa'];

  constructor(
    private dialogRef: MatDialogRef<CardModal>,
    @Inject(MAT_DIALOG_DATA) data: CardModalData
  ) {
    this.modo = data.modo;
    this.tarefa = data.tarefa;
  }

  fecharModal() {
    this.dialogRef.close();
  }
}
