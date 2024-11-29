import { Injectable } from '@angular/core';
import { Livre } from './model/livre.model';
import { Genre } from './model/genre.model';
//import { GenreWrapper } from './model/genrewrapped.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})


export class LivreService {
  apiURL: string = 'http://localhost:8080/produits/api';
 // apiURLGen: string = 'http://localhost:8081/livres/gen';


 livres : Livre[];
/* livre! : Livre;
 */genres! : Genre[];
 livresRecherche!: Livre[];

  constructor(private http: HttpClient) {
    /*this.genres = [ {idgenre : 1, nomgenre : "fantasy"},
      {idgenre : 2, nomgenre : "fantasy-romance"},
      {idgenre : 3, nomgenre : "historical fiction"},
      {idgenre : 4, nomgenre : "literary fiction"},
      {idgenre : 5, nomgenre : "horror"}];*/
    this.livres = [
      {idlivre : 1,titre : "Eragon", auteur :"Christopher Paolini", nbpages :503 , email:"johndoe@gmail.com" , datepublication : new Date("05/08/2003"),genre : {idgenre: 1, nomgenre : "fantasy"}},
      {idlivre : 2,titre :"ACOTAR", auteur : "SARAHj.MAAS",nbpages : 498,email:"contact@protonmail.com",datepublication : new Date("05/05/2015"),genre : {idgenre : 2, nomgenre : "fantasy-romance"}},
      {idlivre : 3,titre :"fourth wing", auteur : "REBBECA YARROS", nbpages : 419,email:"janedoe@yahoo.fr" ,datepublication : new Date("02/05/2023"),genre: {idgenre : 1, nomgenre : "fantasy-romance"}}
       ];
    }
/*listelivres():Livre[] {
    return this.livres;
  }*/
  listelivres(): Observable<Livre[]>{
    return this.http.get<Livre[]>(this.apiURL);
    }
    ajouterlivre( liv: Livre):Observable<Livre>{
      return this.http.post<Livre>(this.apiURL,liv, httpOptions);
      }
  /*ajouterlivre( l: Livre){
  this.livres.push(l);
  }*/
  /*supprimerLivre( liv: Livre){
    //supprimer le produit prod du tableau produits
    const index = this.livres.indexOf(liv, 0);
    if (index > -1) {
    this.livres.splice(index, 1);
    }
    //ou Bien
    //this.produits.forEach((cur, index) => {
    //if(prod.idProduit === cur.idProduit) {
    //this.produits.splice(index, 1);
   // }
   // }); 
    }*/

    supprimerLivre(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
   /* consulterlivre(id:number): Livre{
      this.livre = this.livres.find(p => p.idlivre == id)!;
      //console.log(this.livre);
      return this.livre;*/
      consulterlivre(id: number): Observable<Livre> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Livre>(url);
        }
      
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
 /* updatelivre(l:Livre)
    {
    // console.log(l);
    this.supprimerLivre(l);
    this.ajouterlivre(l);
    this.trierlivres();

    }*/

    updatelivre(liv:Livre) : Observable<Livre>
    {
        return this.http.put<Livre>(this.apiURL,liv, httpOptions);
    }
 /*    listegenres():Genre[] {
      return this.genres;
      } */
      /*listeGenres():Observable<GenreWrapper>{
        return this.http.get<GenreWrapper>(this.apiURLGen);
        }*/
         
        
        
        listegenres : Observable<Genre[]>{
          return this.http.get<Genre[]>(this.apiURL+"/gen");
          }
      
     /* consultergenre(id:number): Genre{ 
      return this.genres.find(gen => gen.idgenre == id)!;
      }*/
     
      rechercherPaTitre(nom: string):Observable<Livre[]> {
        const url = `${this.apiURL}/prodsByTitre/${titre}`;
        return this.http.get<Livre[]>(url);
        }


      rechercherParGenre(idgenre: number): Livre[]{ 
        this.livresRecherche = []; 
        this.livres.forEach((cur, index) => { 
        if(idgenre == cur.genre.idgenre) { 
        console.log("cur "+cur); 
        this.livresRecherche.push(cur); 
        } 
        }); 
        return this.livresRecherche; 
        }
      /*   ajoutergenre( gen: Genre){
          this.genres.push(gen);
          }
      */
          ajoutergenre(gen: Genre): Genre {
            const id = this.genres.length +1
            gen.idgenre=id;
            this.genres.push({...gen}); // ... pour faire un copie de objet cat
            return gen;
          }
    
          
        
    
}