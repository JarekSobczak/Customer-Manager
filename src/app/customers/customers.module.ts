import {NgModule} from '@angular/core';
import {CustomerAddComponent} from './customer-add/customer-add.component';
import {CustomerBrowserComponent} from './customer-browser/customer-browser.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomerService} from './customer.service';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticateGuard} from '../core/authenticate-guard.service';
import {CustomerAddDeactivateGuard} from './customer-add-deactivate-guard.service';

const routes : Routes = [
    { path: 'customers', component: CustomerBrowserComponent },
    { path: 'customers/add', component: CustomerAddComponent, canActivate:[AuthenticateGuard], canDeactivate:[CustomerAddDeactivateGuard] }
  ];

@NgModule({
  declarations: [CustomerAddComponent,
    CustomerBrowserComponent,
    CustomerDetailsComponent],
  providers:[
    CustomerAddDeactivateGuard,
    CustomerService
  ],
  exports:[
    CustomerAddComponent,
    CustomerBrowserComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomersModule {
}
