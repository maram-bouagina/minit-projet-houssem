import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../model/genre.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: ``
})
export class UpdateLivreComponent implements OnInit{
  
      currentlivre = new Livre();
      genres! : Genre[];
      updatedgenId! : number;


      

myForm!: FormGroup;

loading : boolean = false;
      constructor(private activatedRoute: ActivatedRoute,
        private router :Router,
      private livreService: LivreService,private formBuilder: FormBuilder) { }

      ngOnInit() {
          // console.log(this.route.snapshot.params.id);

          //this.genres = this.livreService.listegenres();
        
          /* this.livreService.listeGenres().
          subscribe(cats => {console.log(cats);
          this.genres = cats._embedded.genres;
          }
          );*/

          this.livreService.listegenres().
    subscribe(gens => {this.genres = gens;
    console.log(gens);
    });



         /* this.currentlivre = this.livreService.consulterlivre(this.activatedRoute.snapshot.params['idlivre']);
          console.log(this.currentlivre);*/
          this.livreService.consulterlivre(this.activatedRoute.snapshot.params['id'])
          .subscribe(liv => {
            this.currentlivre = liv; 
            this.updatedgenId = this.currentlivre.genre.idgenre;  
          });
        

          this.myForm = this.formBuilder.group({
            idlivre: [this.currentlivre.idlivre, [Validators.required]],
            titre: [this.currentlivre.titre, [Validators.required, Validators.minLength(6)]],
            auteur: [this.currentlivre.auteur, [Validators.required, Validators.minLength(6)]],
            nbpages: [this.currentlivre.nbpages, [Validators.required]],
            email: [this.currentlivre.email, [Validators.email, Validators.required]],
            datepublication: [this.currentlivre.datepublication, [Validators.required]],
            idgenre: [this.currentlivre.genre.idgenre, [Validators.required]]
        });
    }
      
      updatelivre(){
        //console.log(this.currentlivre);

        /*this.currentlivre.genre = this.livreService.consultergenre(this.myForm.value.idgenre);
 
          this.livreService.updatelivre(this.currentlivre);
          this.router.navigate(['livres']);
          this.currentlivre.genre=this.livreService.consultergenre(this.updatedgenId);*/
          this.currentlivre.genre = this.genres.find(cat => cat.idgenre == this.updatedgenId)!;
          this.livreService.updatelivre(this.currentlivre).subscribe(liv=> {
       this.router.navigate(['livres']); }
       );
    
      } 
 }
