import { Component, OnInit } from '@angular/core';
import { Evento2 } from "../../core/evento2.model";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    eventos: Evento2[] = [];

    evento1 = new Evento2(1, 'Maraton Internacional Lanzarote', 22.19, new Date(2023, 0, 27), 'Senior', 'Lanzarote', 
    'La Lanzarote International Marathon transcurre a lo largo de una avenida costera, abarcando los municipios de Costa Teguise, Arrecife, San Barlotomé y Puerto del Carmen.', 
    '/assets/images/Maraton-Internacional-de-Lanzarote.jpg');

    evento2 = new Evento2(2, 'Maratón de Logroño', 50.19, new Date(2023, 4, 20), 'Senior', 'Logroño', 
    'Este año queremos que la Maratón Internacional Ciudad de Logroño sea una fiesta; para ello vamos a ubicar un montón de puntos de animación por todo el recorrido con bandas de música.', 
    '/assets/images/evento2V.png');

    evento3 = new Evento2(3, 'Maratón Valencia Trinidad Alfonso', 18.19, new Date(2023, 2, 16), 'Junio', 'Valencia', 
    'En el Maratón Valencia Trinidad Alfonso, el segundo más rápido del mundo (2:01:53), encontrarás un circuito idóneo para superar tu marca. ', 
    '/assets/images/evento3V.jpg');

    evento4 = new Evento2(4, 'Maratón de Zaragoza', 42.19, new Date(2023, 5, 23), 'Senior','Zaragoza', 
    'La prueba está promovida y organizada por El club de Atletismo Corre en Zaragoza y Last Lap Slu y cuenta con la colaboración del Excelentísimo Ayuntamiento de Zaragoza.', 
    '/assets/images/eventoZaragoza.jpeg');

    evento5 = new Evento2(5, 'Maratón Martín Fiz', 42.20, new Date(2023, 6, 14), 'Senior', 'Vitoria-Gasteiz', 
    'Organizada por Ascentium y promovida por la Asociación Deportiva Maratlon, cuenta con la homologación de la Real Federación Española de Atletismo.', 
    '/assets/images/eventoFiz.jpg');

    evento6 = new Evento2(5, 'Maratón de Madrid', 42.19, new Date(2023, 3, 23), 'Junior', 'Madrid',
    'El recorrido de la también denominada MAPOMA cuenta con la homologación de la Real Federación Española de Atletismo (RFEA) y World Athletics,',
    '/assets/images/eventoMadrid.jpg');
    
    ngOnInit(): void {
        this.eventos.push(this.evento1);
        this.eventos.push(this.evento2);
        this.eventos.push(this.evento3);
        this.eventos.push(this.evento4);
        this.eventos.push(this.evento5);
        this.eventos.push(this.evento6);
    }
}