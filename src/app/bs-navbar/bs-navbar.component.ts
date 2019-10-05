import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Appuser } from '../models/app.user';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  appuser:Appuser;
  constructor(private afauth:AuthService) { 
    afauth.appUser$.subscribe(user =>{ this.appuser=user})
  }
logoutmethod(){
this.afauth.logout();
}

}
