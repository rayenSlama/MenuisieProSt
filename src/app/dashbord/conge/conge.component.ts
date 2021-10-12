import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conges } from 'src/app/Model/Conges';
import { Employes } from 'src/app/Model/Employes';
import { CongeService } from 'src/app/service/conge.service';
import { EmployeService } from 'src/app/service/employe.service';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {
  public employes:any;
  employe!: Employes;
  /*conge!:Conges;*/
/* public conges:any;*/

 /*conge!:Conges;*/
  /* public conges:any;*/
  /*conge!:Conges;*/
  /* public conges:any;*/
  /*conge!:Conges;*/
  /* public conges:any;*/
 
  conges: any = [];
  base!: number;
 /*public listes!: any;*/
 private currentConge: Conges = new Conges;
/*rivate currentListe : Listes = new Listes;*/

  constructor(private httpClient:HttpClient, public congService: CongeService,public emplService:EmployeService ,private router:Router) { }


  ngOnInit(): void {

    this.congService.gettConge().subscribe(data=>{
      this.conges=data;
    },err=>{
      console.log(err);
    }
  )


  this.emplService.getEmploye()
  .subscribe(data=>{
     this.employes=data;
   },err=>{
     console.log(err);
   }
 )
  }
AnnulerConge(id:number){
  
    let conf=confirm("Etes vous sure?");
    if (conf) {

      this.congService.delete(60)
      .subscribe(data=>{
        console.log(data)
        this.congService.gettConge()
        .subscribe(data=>{
          this.conges=data;
        },err=>{
          console.log(err);
        }
      )


      },err=>{
        console.log(err);
        }
      )

    }

}



/*onSaveConge(data: any){
  this.congService.saveData(this.congService.host+"/conges",data)
    .subscribe(res=>{
      alert("Congé ajouté avec succès.");
      this.currentConge=res;
     
    this.congService.getConge().subscribe(data=>{
      this.conges=data;
    },err=>{
      console.log(err);
    }
  )
    },err=>{
      console.log(err);
    })
  } */
/* onSaveConge(data: any){

  
    this.congService.saveData(this.congService.host+"/addConge/"+this.conges.id,data)
      .subscribe(res=>{

        alert("Congé ajouté avec succès.");
        this.currentConge=res;
       
      this.congService.gettConge().subscribe(data=>{
        this.conges=data;
      },err=>{
        console.log(err);
      }
    )
      },err=>{
        console.log(err);
      })
    } 
*/


   onSaveConge(data: any){
      this.congService.saveData(132,data)
        .subscribe(res=>{
          alert("Congé ajouté avec succès.");
          this.currentConge=res;
         
        this.congService.gettConge().subscribe(data=>{
          this.conges=data;
        },err=>{
          console.log(err);
        }
      )
        },err=>{
          console.log(err);
        })
      } 





}


 



