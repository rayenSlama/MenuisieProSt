import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employes } from '../Model/Employes';
import { EmployeService } from '../service/employe.service';

@Component({
  selector: 'app-modifemploye',
  templateUrl: './modifemploye.component.html',
  styleUrls: ['./modifemploye.component.css']
})
export class ModifemployeComponent implements OnInit {
 private url!: string;
 public currentData: Employes = new Employes;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private emplService:EmployeService) { }

  ngOnInit(): void {
    this.url = atob(this.activatedRoute.snapshot.params.id)
    this.emplService.getData(this.url)
      .subscribe(data => {
        this.currentData = data;
      }, err => {
        console.log(err);
      })
  }


  onUpdateData(value:any){
    this.emplService.updateData(this.url,value)
    .subscribe(data => {
      alert("Mise à jours effectuée avec succès");
      this.router.navigateByUrl("/dashbord/profile");
    }, err => {
      console.log(err);
    });
  }

}
