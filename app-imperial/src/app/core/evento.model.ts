
export class Evento {
    constructor(
        public id: number,
        public nombre: string,
        public kilometros: number,
        public fecha: Date,
        public categoria: string,
        public localidad: string,
        public descripcion: string,
        public urlImagen: string
    ) { }
}