import { Component, OnInit } from '@angular/core';
import { Evento2 } from "../../core/evento2.model";
import { Evento } from "../../core/evento.model";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    eventos2: Evento2[] = [];

    eventos: Evento[] = [];

    eventoNew1 = new Evento2(1, 'Maratón Int. Lanzarote', 22.19, new Date(2023, 0, 27), 'Senior', 'Lanzarote',
        'La Lanzarote International Marathon transcurre por los municipios costeros de Arrecife, San Barlotomé, Costa Teguise y Puerto del Carmen.',
        '/assets/images/Maraton-Internacional-de-Lanzarote.jpg');

    eventoNew2 = new Evento2(2, 'Maratón de Logroño', 50.19, new Date(2023, 4, 20), 'Senior', 'Logroño',
        'Este año la Maratón Internacional de Logroño será una fiesta; para ello vamos a ubicar puntos de animación por todo el recorrido con bandas de música.',
        '/assets/images/maraton_logrono.jpeg');

    eventoNew3 = new Evento2(3, 'Maratón Trinidad Alfonso', 18.19, new Date(2023, 2, 16), 'Junio', 'Valencia',
        'En el Maratón Valencia Trinidad Alfonso, el segundo más rápido del mundo (2:01:53), encontrarás un circuito idóneo para superar tu marca. ',
        '/assets/images/evento3V.jpg');

    eventoNew4 = new Evento2(4, 'Maratón de Zaragoza', 42.19, new Date(2023, 5, 23), 'Senior', 'Zaragoza',
        'La prueba está promovida y organizada por El club de Atletismo Corre en Zaragoza y Last Lap Slu y con la colaboración del Ayuntamiento de Zaragoza.',
        '/assets/images/eventoZaragoza.jpeg');

    eventoNew5 = new Evento2(5, 'Maratón Martín Fiz', 42.20, new Date(2023, 6, 14), 'Senior', 'Vitoria',
        'Organizada por Ascentium y promovida por la Asociación Deportiva Maratlon, cuenta con la homologación de la Real Federación Española de Atletismo.',
        '/assets/images/eventoFiz.jpg');

    eventoNew6 = new Evento2(5, 'Maratón de Madrid', 42.19, new Date(2023, 3, 23), 'Junior', 'Madrid',
        'El recorrido de la también denominada MAPOMA cuenta con la homologación de la Real Federación Española de Atletismo (RFEA) y World Athletics,',
        '/assets/images/eventoMadrid.jpg');


    evento1 = new Evento(1, 'Media Maratón Almería', 22.19, new Date(2022, 0, 27), 'Senior', 'Almería', 'La etíope Roza Dereje baja de dos horas y veinte minutos (2:18:30) y por primera vez en la historia coinciden cuatro mujeres por debajo de 2h19.', '/assets/images/evento1.png');

    evento2 = new Evento(2, 'Media Maratón Toledo', 22.19, new Date(2022, 1, 27), 'Senior', 'Toledo', 'Gran multitud de aficionados y profesionales reunidos en un emplazamiento único. Ha habido un sinfín de sorpresas para todos.', '/assets/images/evento2.png');

    evento3 = new Evento(3, 'EDP Maratón Sevilla', 22.19, new Date(2022, 2, 27), 'Junior', 'Sevilla', 'Arrasa Sevilla en un encuentro multitudinario, donde personas de todo el mundo se han reunio para lleva a cabo esta memorable carrera.', '/assets/images/evento3.png');

    ngOnInit(): void {
        this.eventos2.push(this.eventoNew1);
        this.eventos2.push(this.eventoNew2);
        this.eventos2.push(this.eventoNew3);
        this.eventos2.push(this.eventoNew4);
        this.eventos2.push(this.eventoNew5);
        this.eventos2.push(this.eventoNew6);
        this.eventos.push(this.evento1);
        this.eventos.push(this.evento2);
        this.eventos.push(this.evento3);
    }
}
