import { Component } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html'
})
export class AddLivreComponent {
  message : string="";
  newlivre = new Livre();
  constructor(private livreService:LivreService,
    private router :Router
  ) { }
  addlivre(){
    //console.log(this.newlivre);
    this.livreService.ajouterlivre(this.newlivre);
    this.message="Livre"+this.newlivre.titre+" est ajouté avec succès!";
    this.router.navigate(['livres']);
    }
}
