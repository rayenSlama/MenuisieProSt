import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employes } from 'src/app/Model/Employes';
import { EmployeService } from 'src/app/service/employe.service';
import { PointageService } from 'src/app/service/pointage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
public salaires:any;
public pointages:any;

public employes:any;
 public id!: number;
 public mois!: string;
  employe!: Employes;
 /* id!: number;*/
 
  constructor( private pointService: PointageService , private emplService:EmployeService, private router:Router) { }

  ngOnInit(): void {
    this.pointService.getPointage()
  .subscribe(data=>{
     this.pointages=data;
   },err=>{
     console.log(err);
   }
 )

   /* this.pointService.getEmpById(this.id)
    .subscribe(data=>{
       this.pointages=data;
     },err=>{
       console.log(err);
     }
   )*/

  
    
   this.emplService.getEmploye()
   .subscribe(data=>{
      this.employes=data;
    },err=>{
      console.log(err);
    }
  )
   }
  


  onChercherMois(form : any){
    this.pointService.getPointageByMois(form.keyword).subscribe( data =>{
      this.pointages=data;
          },err=>{
            console.log(err);
        })
      }
 findEmpl(id:number){
this.pointService.getEmpById(124).subscribe(res=>{
  this.pointages=res;
},err=>{
  console.log(err);
})
      }


      findMois(mois:string){
      
        this.pointService.getpointByMpois("2021-09").subscribe(res=>{
          this.pointages=res;
        },err=>{
          console.log(err);
        })
      }
      

  Afficher(){

  }

  Imprimer(){

  }


  pointag(id :number){
    this.router.navigate(["pointage",id]);
  }
}
