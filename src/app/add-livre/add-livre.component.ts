import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';
import { Lecteur } from '../model/lecteur.model';
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

public lecteur = new Lecteur();

confirmPassword?:string;

myForm!: FormGroup;

err!:any;
loading : boolean = false;
  constructor(private formBuilder: FormBuilder,private livreService:LivreService,
    private router :Router
  ) { }
  
  ngOnInit() : void {
    this.genres = this.livreService.listegenres();
    this.myForm = this.formBuilder.group({

      readername : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : ['', [Validators.required]]
      } );
    }
  addlivre(){
    console.log(this.newIdgenre);
    this.newgenre=this.livreService.consultergenre(this.newIdgenre);
    this.newlivre.genre=this.newgenre;
    this.livreService.ajouterlivre(this.newlivre);
    this.message="Livre"+this.newlivre.titre+" est ajouté avec succès!";
    this.router.navigate(['livres']);
    }
    onRegister(){
    console.log(this.lecteur);
  }

}
