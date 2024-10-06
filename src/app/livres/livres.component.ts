import { Component } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html'
})
export class LivresComponent {
 livres : Livre[];
  constructor(private livreService: LivreService) {
   /*this.livres = [
      {idlivre : 1, titre : "Eragon", auteur :"Christopher Paolini", nbpages :503, genre : "fantasy" ,  datepublication : new Date("05/08/2003")},
      {idlivre : 2,titre :"ACOTAR", auteur : "SARAHj.MAAS",nbpages : 498, genre :"fantasy", datepublication : new Date("05/05/2015")},
      {idlivre : 3,titre :"fourth wing", auteur : "REBBECA YARROS", nbpages : 419, genre : "fantasy-romance", datepublication : new Date("02/05/2023")}
       ];*/
       this.livres = livreService.listelivres();
    }
    supprimerLivre(l: Livre)
      {
      //console.log(l);
      let conf = confirm("Etes-vous sûr ?");
      if (conf)

      this.livreService.supprimerLivre(l);

      }

    }