import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CustomersModule} from './customers/customers.module';
import {CoreModule} from './core/core.module';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {ContractsModule} from './contracts/contracts.module';

const routes:Routes = [

  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: '**', component:NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CustomersModule,
    ContractsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

