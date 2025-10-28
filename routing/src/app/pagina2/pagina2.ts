import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentiService } from '../services/studenti-service';

@Component({
  selector: 'app-pagina2',
  imports: [FormsModule],
  templateUrl: './pagina2.html',
  styleUrl: './pagina2.css',
})
export class Pagina2 {
  nome = '';
  classe = '';
  mediaVoti: number | null = null;

  constructor(private studentiService: StudentiService) {}

  aggiungiStudente() {
    if (this.nome && this.classe && this.mediaVoti !== null) {
      this.studentiService.aggiungiStudente(this.nome, this.classe, this.mediaVoti);
      alert('Studente aggiunto con successo!');
      this.nome = '';
      this.classe = '';
      this.mediaVoti = null;
    } else {
      alert('Compila tutti i campi.');
    }
  }
}
