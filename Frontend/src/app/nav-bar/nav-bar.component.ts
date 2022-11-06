import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  items: MenuItem[];
  items2: MenuItem[];
  isLoggedIn: boolean = false;

  constructor(private storageService: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.items = [{
      label: 'Logowanie',
      routerLink: '/login',
    },
  {
   label: "Rejestracja",
   routerLink: '/register',
  }];
  this.items2 = [{
    label: 'Profil',
    routerLink: '/profile',
  },
{
 label: "Wyloguj",
//  command: () => this.logout(),
//  routerLink: '/',
}];
  }

  // logout(){
  //   this.authService.logout();
  //   window.location.reload();
  // }
}
