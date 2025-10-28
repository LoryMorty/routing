import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-studenti',
  imports: [CommonModule,Studenti],
  templateUrl: './studenti.html',
  styleUrl: './studenti.css',
})
export class Studenti {
  @Input() nome!: string;
  @Input() classe!: string;
  @Input() mediaVoti!: number;
}
