export class Person {
    constructor(
        public id: number,
        public nombre: string,
        public apellidos: string,
        public dni: string,
        public direccion: string,
        public email: string,
        public talla: string,
        public clubRunning?: string,
        public metodoPago?: string
    ) { }
}