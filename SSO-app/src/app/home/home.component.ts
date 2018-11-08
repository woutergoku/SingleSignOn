import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { OktaAuthWrapper } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username;
  password;

  constructor(private oauthService: OAuthService, private oktaAuthWrapper: OktaAuthWrapper) { }

  login() {
    //console.log(this.oauthService.initImplicitFlow());
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  loginWithPassword() {
    this.oktaAuthWrapper.login(this.username, this.password)
      .then(_ => console.debug('logged in'))
      .catch(err => console.error('error logging in', err));
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if(!claims) {
      return null;
    }
    return claims['name'];
  }
}
