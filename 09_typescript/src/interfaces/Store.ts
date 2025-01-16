export interface Store {
    nombre: string;
    apellido: string;
    edad: number;
    estado: boolean;

    crecer?:() => void;
    decrecer?:() => void;
    state?:() => void;
}