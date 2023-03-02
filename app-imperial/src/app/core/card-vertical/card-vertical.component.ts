import { Component,Input } from '@angular/core';
import { Evento2 } from "../evento2.model";

@Component({
  selector: 'app-card-vertical',
  templateUrl: './card-vertical.component.html',
  styleUrls: ['./card-vertical.component.scss']
})
export class CardVerticalComponent {
  @Input() evento = new Evento2(1, '', 0, new Date(), '', '', '', '');
}
