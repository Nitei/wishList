import { ListaItem } from "./lista-item.model";

export class Lista {

    constructor (
        public titulo: string,
        public id: number = new Date().getTime(),
        public creadaEn: Date = new Date(),
        public terminadaEn?: Date,
        public terminada: boolean = false,
        public items: ListaItem[] = []
    ) {

    }
}
