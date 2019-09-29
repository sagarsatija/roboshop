import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private afauth:AngularFireAuth) { }
onlogin(){
  this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}

}
