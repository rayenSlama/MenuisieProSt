import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaireService } from 'src/app/service/salaire.service';

@Component({
  selector: 'app-salaire',
  templateUrl: './salaire.component.html',
  styleUrls: ['./salaire.component.css']
})
export class SalaireComponent implements OnInit {
 public salaires : any;

 id!: number;
  constructor(public salService: SalaireService, private router:Router) { }

  ngOnInit(): void  {this.salService.getSalaires()
  .subscribe(data=>{
     this.salaires=data;
   },err=>{
     console.log(err);
   }
 )
}


  Afficher(){

  }

  Imprimer(){

  }


  onChercherMois(form : any){
    this.salService.getSalairesByMois(form.keyword).subscribe( data =>{
     
      this.salaires=data;
          },err=>{
            console.log(err);
        })
      }


      findEmpl(id:number){
        this.salService.getEmpById(124).subscribe(res=>{
          this.salaires=res;
        },err=>{
          console.log(err);
        })
              }
      

}
