import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  errorMessage!: string;
  Telephone = '23454152'
  password = '123456'
  invalidLogin = false
  constructor(private router: Router,
    private loginservice: AuthentificationService) { }

  ngOnInit(): void {
  }
  

  checkLogin() {
    if (this.loginservice.authenticate(this.Telephone, this.password)
    ) {
      this.router.navigate(['/dashbord'])
      this.invalidLogin = false
      alert("Connexion effectuée avec succès.");
    } else
    {
      this.invalidLogin = true
      alert("Num  télephone ou password incorrect!");
    }
  }


}
