import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
myForm!: FormGroup;
  constructor(private livreService:LivreService,
    private router :Router,private formBuilder: FormBuilder
  ) { }
  
  ngOnInit() : void {
    this.genres = this.livreService.listegenres();
    this.myForm = this.formBuilder.group({

      idlivre : ['', [Validators.required]],
      titre : ['', [Validators.required, Validators.minLength(6)]],
      auteur : ['', [Validators.required, Validators.minLength(6)]],
      nbpages : ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      datepublication: ['', [Validators.required]],
      idgenre : ['', [Validators.required]]
      } );
      
    }
  addlivre(){
    console.log(this.newIdgenre);
    /* this. newlivre.idlivre = this.myForm.value.idlivre;
    this. newlivre.titre = this.myForm.value.titre;
    this. newlivre.auteur = this.myForm.value.auteur;
    this. newlivre.nbpages = this.myForm.value.nbpages; 
    this. newlivre.email = this.myForm.value.email;
    this. newlivre.datepublication = this.myForm.value.datepublication; */
    //this. newlivre.genre = this.livreService.consultergenre(this.myForm.value.idgenre);

    this.newgenre=this.livreService.consultergenre(this.newIdgenre);
    this.newlivre.genre=this.newgenre;
    this.livreService.ajouterlivre(this.newlivre);
    this.message="Livre"+this.newlivre.titre+" est ajouté avec succès!";
    this.router.navigate(['livres']);
    }

  }


