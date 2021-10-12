import { Component, OnInit } from '@angular/core';

//import { SettingsService } from '../service/settings.service';
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashbord', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: 'profile', title: 'Gestion employés', icon: 'person', class: '' },
  { path: 'table', title: 'Rapport de pointage', icon: 'content_paste', class: '' },
  
  { path: 'conge', title: 'Gestion congés', icon: 'edit_calendar', class: '' },
  { path: 'salaire', title: 'Gestion salaire', icon: 'request_quote', class: '' },
  { path: 'deconnexion', title: 'Déconnexion', icon: 'logout', class: '' }
];

@Component({
selector: 'app-sidebar',
templateUrl: './sidebar.component.html',
styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];

constructor() { }

ngOnInit() {
  this.menuItems = ROUTES.filter(menuItem => menuItem);
}
isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};
}