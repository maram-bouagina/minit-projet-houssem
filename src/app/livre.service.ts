import { Injectable } from '@angular/core';
import { Livre } from './model/livre.model';

@Injectable({
  providedIn: 'root'
})


export class LivreService {
 livres : Livre[];
 livre! : Livre;
  constructor() {
    this.livres = [
      {idlivre : 1,titre : "Eragon", auteur :"Christopher Paolini", nbpages :503, genre : "fantasy" ,  datepublication : new Date("05/08/2003")},
      {idlivre : 2,titre :"ACOTAR", auteur : "SARAHj.MAAS",nbpages : 498, genre :"fantasy", datepublication : new Date("05/05/2015")},
      {idlivre : 3,titre :"fourth wing", auteur : "REBBECA YARROS", nbpages : 419, genre : "fantasy-romance", datepublication : new Date("02/05/2023")}
      
       ];
    }
  listelivres():Livre[] {
    return this.livres;
  }
  ajouterlivre( l: Livre){
  this.livres.push(l);
  }
  supprimerLivre( liv: Livre){
    //supprimer le produit prod du tableau produits
    const index = this.livres.indexOf(liv, 0);
    if (index > -1) {
    this.livres.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }
    consulterlivre(id:number): Livre{
      this.livre = this.livres.find(p => p.idlivre == id)!;
      //console.log(this.livre);
      return this.livre;
      
  }
  trierlivres(){
    this.livres = this.livres.sort((n1,n2) => {
    if (n1.idlivre! > n2.idlivre!) {
    return 1;
    }
    if (n1.idlivre! < n2.idlivre!) {
    return -1;
    }
    return 0;
    });
    }
  updatelivre(l:Livre)
    {
    // console.log(l);
    this.supprimerLivre(l);
    this.ajouterlivre(l);
    this.trierlivres();

    }
    
}