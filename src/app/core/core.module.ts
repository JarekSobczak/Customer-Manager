import {NgModule} from '@angular/core';
import {MessageService} from './message.service';
import {ErrorHandlingInterceptor} from './error.handling.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Config, CONFIG} from '../model';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthenticateGuard} from './authenticate-guard.service';
import {AuthenticationService} from './authentication.service';
import {CommonModule} from '@angular/common';


const config: Config = {
  apiUrl: 'http://localhost:8080'
};

@NgModule({
  providers: [
    AuthenticationService,
    AuthenticateGuard,
    MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true},
    {provide: CONFIG, useValue: config}
  ],
  declarations: [NavBarComponent, NotFoundComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [NavBarComponent]
})
export class CoreModule {
}
