import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';



@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html'
})
export class AddLivreComponent implements OnInit  {
  message : string="";
  newlivre = new Livre();
  genres! :Genre[];
newIdgenre! : number;
newgenre! :Genre;
  constructor(private livreService:LivreService,
    private router :Router
  ) { }
  
  ngOnInit() : void {
    this.genres = this.livreService.listegenres();
    }
  addlivre(){
    console.log(this.newIdgenre);
    this.newgenre=this.livreService.consultergenre(this.newIdgenre);
    this.newlivre.genre=this.newgenre;
    this.livreService.ajouterlivre(this.newlivre);
    this.message="Livre"+this.newlivre.titre+" est ajouté avec succès!";
    this.router.navigate(['livres']);
    }

}
