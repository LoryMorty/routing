import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Studenti } from '../studenti/studenti';
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-pagina3',
  imports: [CommonModule, Studenti],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 {
  studenti: any[] = [];

  constructor(private studentiService: StudentiService) {}

  ngOnInit() {
    this.studenti = this.studentiService.getStudenti();
  }

  eliminaStudente(id: number) {
    if (confirm('Vuoi davvero eliminare questo studente?')) {
      this.studentiService.rimuoviStudente(id);
      this.studenti = this.studentiService.getStudenti(); // aggiorna la lista
    }
  }
}

