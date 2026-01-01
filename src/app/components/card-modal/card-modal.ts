// src/app/components/card-modal/card-modal.ts

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-card-modal',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
  ],
  templateUrl: './card-modal.html',
  styleUrl: './card-modal.scss',
})
export class CardModal {
  constructor(private dialogRef: MatDialogRef<CardModal>) {}

  fecharModal() {
    this.dialogRef.close();
  }
}
