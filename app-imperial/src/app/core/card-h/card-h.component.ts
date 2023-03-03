import { Component, Input } from '@angular/core';
import { Evento } from "../evento.model";

@Component({
  selector: 'app-card-h',
  templateUrl: './card-h.component.html',
  styleUrls: ['./card-h.component.scss']
})
export class CardHComponent {

  // https://material.angular.io/assets/img/examples/shiba2.jpg

  @Input() evento = new Evento(1, '', 0, new Date(), '', '', '', '');
}
