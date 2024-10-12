import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../livre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: ``
})
export class UpdateLivreComponent implements OnInit{
  
      currentlivre = new Livre();
      genres! : Genre[];
      updatedgenId! : number;
      constructor(private activatedRoute: ActivatedRoute,
        private router :Router,
      private livreService: LivreService) { }

      ngOnInit() {
          // console.log(this.route.snapshot.params.id);
          this.genres = this.livreService.listegenres();
          this.currentlivre = this.livreService.consulterlivre(this.activatedRoute.snapshot. params['idlivre']);
          console.log(this.currentlivre);
          this.updatedgenId=this.currentlivre.genre.idgenre;
      }
      updatelivre(){
        //console.log(this.currentlivre);
          this.livreService.updatelivre(this.currentlivre);
          this.router.navigate(['livres']);
          this.currentlivre.genre=this.livreService.consultergenre(this.updatedgenId);
    
      }    
 }
