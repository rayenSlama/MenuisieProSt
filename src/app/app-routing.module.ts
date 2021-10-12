import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DeconnexionComponent } from './dashbord/deconnexion/deconnexion.component';
import { HomeComponent } from './dashbord/home/home.component';
import { CongeComponent } from './dashbord/conge/conge.component';
import { AjoutemployeComponent } from './dashbord/profile/ajoutemploye/ajoutemploye.component';
import { ProfileComponent } from './dashbord/profile/profile.component';

import { RootComponent } from './dashbord/root/root.component';
import { SalaireComponent } from './dashbord/salaire/salaire.component';
import { TableComponent } from './dashbord/table/table.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Page404Component } from './page404/page404.component';
import { PagesComponent } from './pages/pages.component';
import { ServicesComponent } from './services/services.component';
import { ShopComponent } from './shop/shop.component';
import { ModifemployeComponent } from './modifemploye/modifemploye.component';
import { BadgeComponent } from './dashbord/profile/badge/badge.component';
import { DetailsEmployeComponent } from './dashbord/profile/details-employe/details-employe.component';
import { PointageComponent } from './dashbord/table/pointage/pointage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'page404', component: Page404Component},
  {path: 'blog', component: BlogComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'connexion', component: ConnexionComponent},
  
  {path: 'modifemploye/:id', component: ModifemployeComponent},
  {path: 'ajoutemploye', component: AjoutemployeComponent},
  {path:'badge/:id' , component: BadgeComponent},
  {path: 'details-employe/:id' , component:DetailsEmployeComponent},
  {path: 'pointage/:id' , component:PointageComponent},
  {path: 'dashbord', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'profile',component:ProfileComponent},
    {path: 'table', component: TableComponent},
    {path: 'conge', component: CongeComponent},
    { path: 'salaire', component:SalaireComponent},
    { path: 'deconnexion', component:DeconnexionComponent}
  ]}

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
