import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import 'hammerjs';
import { ServicesComponent } from './services/services.component';
import { ShopComponent } from './shop/shop.component';
import { Page404Component } from './page404/page404.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule } from '@angular/material';
import { RootComponent } from './dashbord/root/root.component';
import { HomeComponent } from './dashbord/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './dashbord/profile/profile.component';
import { CongeComponent} from './dashbord/conge/conge.component';
import { TableComponent } from './dashbord/table/table.component';
import { MsgiconbtnComponent } from './msgiconbtn/msgiconbtn.component';
import { SalaireComponent } from './dashbord/salaire/salaire.component';
import { DeconnexionComponent } from './dashbord/deconnexion/deconnexion.component';

import { ModifemployeComponent } from './modifemploye/modifemploye.component';
import { HttpClientModule } from '@angular/common/http';
import { AjoutemployeComponent } from './dashbord/profile/ajoutemploye/ajoutemploye.component';
import { BadgeComponent } from './dashbord/profile/badge/badge.component';
import { DetailsEmployeComponent } from './dashbord/profile/details-employe/details-employe.component';
import { PointageComponent } from './dashbord/table/pointage/pointage.component';





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    ServicesComponent,
    ShopComponent,
    Page404Component,
    ContactUsComponent,
    GalleryComponent,
    BlogComponent,
    PagesComponent,
    ConnexionComponent,
    RootComponent,
    HomeComponent,
    NavbarComponent,
    ImagecardComponent,
    FigurecardComponent,
    SidebarComponent,
    ProfileComponent,
    CongeComponent,
    TableComponent,
    MsgiconbtnComponent,
    SalaireComponent,
    DeconnexionComponent,
    AjoutemployeComponent,
    ModifemployeComponent,
    BadgeComponent,
    DetailsEmployeComponent,
    PointageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    HttpClientModule ,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
