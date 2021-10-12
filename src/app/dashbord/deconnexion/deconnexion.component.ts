import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {
  constructor(
    private authService: AuthentificationService,
    private router: Router) {

  }

  ngOnInit() {
    this.authService.logOut();
    this.router.navigate(['connexion']);
  }

}
