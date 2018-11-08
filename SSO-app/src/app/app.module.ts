import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SearchService, AuthGuard, OktaAuthWrapper } from './shared';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchService, AuthGuard, OktaAuthWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
