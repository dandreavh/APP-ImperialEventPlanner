import { Component, OnInit } from '@angular/core';
import { Evento2 } from "../../core/evento2.model";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    eventos: Evento2[] = [];

    evento1 = new Evento2(1, 'Maraton Internacional Lanzarote', 22.19, new Date(2023, 0, 27), 'Senior', 'Lanzarote', 'Con una temperatura media de 19ºC la Lanzarote International Marathon transcurre a lo largo de una avenida costera en la Isla de Lanzarote, abarcando los municipios de Costa Teguise, Arrecife, San Barlotomé y Puerto del Carmen.', '/assets/images/Maraton-Internacional-de-Lanzarote.jpg');

    evento2 = new Evento2(2, 'Maratón de Logroño', 50.19, new Date(2023, 4, 27), 'Senior', 'Logroño', 'Este año queremos que la Maratón Internacional Ciudad de Logroño sea una fiesta; para ello vamos a ubicar un montón de puntos de animación por todo el recorrido con bandas de música.', '/assets/images/evento2V.png');

    evento3 = new Evento2(3, 'Maratón Valencia Trinidad Alfonso', 18.19, new Date(2023, 2, 27), 'Junio', 'Valencia', 'En el Maratón Valencia Trinidad Alfonso, el segundo más rápido del mundo (2:01:53), encontrarás un circuito idóneo para superar tu marca. ', '/assets/images/evento3V.jpg');

    // evento4 = new Evento2(4, 'Maraton Internacional Lanzarote', 22.19, new Date(2023, 0, 27), 'Senior', 'Almería', 'La etíope Roza Dereje baja de dos horas y veinte minutos (2:18:30) y por primera vez en la historia coinciden cuatro mujeres por debajo de 2h19.', '/assets/images/evento1.png');

    // evento5 = new Evento2(5, 'Media Maratón Toledo', 22.19, new Date(2023, 1, 27), 'Senior', 'Toledo', 'Gran multitud de aficionados y profesionales reunidos en un emplazamiento único. Ha habido un sinfín de sorpresas para todos.', '/assets/images/evento2.png');

    // evento6 = new Evento2(5, 'EDP Maratón Sevilla', 22.19, new Date(2023, 2, 27), 'Junior', 'Sevilla', 'Arrasa Sevilla en un encuentro multitudinario, donde personas de todo el mundo se han reunio para lleva a cabo esta memorable carrera.', '/assets/images/evento3.png');
    
    ngOnInit(): void {
        this.eventos.push(this.evento1);
        this.eventos.push(this.evento2);
        this.eventos.push(this.evento3);
    }
}