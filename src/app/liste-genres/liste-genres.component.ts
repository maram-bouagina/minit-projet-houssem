import { Component, OnInit } from '@angular/core';
import { LivreService } from '../livre.service';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html',
  styles: ``
})
export class ListeGenresComponent implements OnInit {
  genres! : Genre[];
  updatedGen:Genre = {"idgenre":0,"nomgenre":""};
  ajout:boolean=true;

  constructor(private livreService:LivreService) { }


 ngOnInit(): void {
 
  /*this.genres = this.livreService.listegenres();
  console.log(this.genres);*/
  this.chargergenres();
}
chargergenres(){
  /*this.genres=this.livreService.listegenres();
  console.log(this.genres);*/
  this.livreService.listegenres().
  subscribe(gens => {this.genres = gens._embedded.categories;
  console.log(gens);
  });
  }
genreUpdated(gen:Genre){
        console.log("genre reçu de genreUpdated",gen);
        /*this.livreService.ajoutergenre(gen);
        this.chargergenres();*/
        this.livreService.ajoutergenre(gen).subscribe( ()=> this.chargergenres());

} 
updategen(gen:Genre) {
  this.updatedGen=gen;
  this.ajout=false; 
  }


}
