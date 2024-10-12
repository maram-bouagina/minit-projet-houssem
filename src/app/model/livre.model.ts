import { Genre } from "./genre.model";

export class Livre{
    idlivre ! : number;
    titre! : string;
    auteur! : string;
    nbpages! : number;
    //genre? : string;
    datepublication! : Date;
    genre! : Genre;
}

