import { Component, OnInit } from '@angular/core';
import { Evento } from "../../core/evento.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  eventos: Evento[] = [];

  evento1 = new Evento(1, 'Media Maratón Almería', 22.19, new Date(2022, 0, 27), 'Senior', 'Almería', 'La etíope Roza Dereje baja de dos horas y veinte minutos (2:18:30) y por primera vez en la historia coinciden cuatro mujeres por debajo de 2h19.', '/assets/images/evento1.png');

  evento2 = new Evento(2, 'Media Maratón Toledo', 22.19, new Date(2022, 1, 27), 'Senior', 'Toledo', 'Gran multitud de aficionados y profesionales reunidos en un emplazamiento único. Ha habido un sinfín de sorpresas para todos.', '/assets/images/evento2.png');

  evento3 = new Evento(3, 'EDP Maratón Sevilla', 22.19, new Date(2022, 2, 27), 'Junior', 'Sevilla', 'Arrasa Sevilla en un encuentro multitudinario, donde personas de todo el mundo se han reunio para lleva a cabo esta memorable carrera.', '/assets/images/evento3.png');

  ngOnInit(): void {
    this.eventos.push(this.evento1);
    this.eventos.push(this.evento2);
    this.eventos.push(this.evento3);
  }
}
