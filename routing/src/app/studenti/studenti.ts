import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-studenti',
  imports: [CommonModule,Studenti, RouterLink],
  templateUrl: './studenti.html',
  styleUrl: './studenti.css',
})
export class Studenti {
  @Input() nome!: string;
  @Input() classe!: string;
  @Input() studente: any;
}
