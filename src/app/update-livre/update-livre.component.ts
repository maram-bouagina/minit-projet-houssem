import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../model/genre.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lecteur } from '../model/lecteur.model';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: ``
})
export class UpdateLivreComponent implements OnInit{
  
      currentlivre = new Livre();
      genres! : Genre[];
      updatedgenId! : number;


      
public lecteur = new Lecteur();

confirmPassword?:string;

myForm!: FormGroup;

err!:any;
loading : boolean = false;
      constructor(private activatedRoute: ActivatedRoute,
        private router :Router,
      private livreService: LivreService,private formBuilder: FormBuilder) { }

      ngOnInit() {
          // console.log(this.route.snapshot.params.id);
          this.genres = this.livreService.listegenres();
          this.currentlivre = this.livreService.consulterlivre(this.activatedRoute.snapshot. params['idlivre']);
          console.log(this.currentlivre);
          this.updatedgenId=this.currentlivre.genre.idgenre;


          this.myForm = this.formBuilder.group({

            readername : ['', [Validators.required]],
            email : ['', [Validators.required, Validators.email]],
            password : ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword : ['', [Validators.required]]
            } );
      }
      updatelivre(){
        //console.log(this.currentlivre);
          this.livreService.updatelivre(this.currentlivre);
          this.router.navigate(['livres']);
          this.currentlivre.genre=this.livreService.consultergenre(this.updatedgenId);
    
      } 
      onRegister(){
        console.log(this.lecteur);
      }   
 }
