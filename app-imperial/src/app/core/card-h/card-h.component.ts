import { Component } from '@angular/core';
import { Evento } from "../evento.model";

@Component({
  selector: 'app-card-h',
  templateUrl: './card-h.component.html',
  styleUrls: ['./card-h.component.scss']
})
export class CardHComponent {

  evento1 = new Evento(1, 'Media Maratón Almería', 22.19, new Date(2022, 0, 27), 'Senior', 'Almería', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati voluptas nulla reprehenderit doloremque tempora dolorem ipsa minus, corrupti vel saepe expedita quia aperiam voluptatum necessitatibus.Aut rem et ullam!');
}
