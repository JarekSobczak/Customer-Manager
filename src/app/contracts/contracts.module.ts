import {NgModule} from '@angular/core';
import {ContractListComponent} from './contract-list/contract-list.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import {ContractResolverService} from './contract-resolver.service';

const routes:Routes = [
  {path: 'contracts/:id', component: ContractDetailsComponent, resolve: {contract: ContractResolverService}},
  { path: 'contracts', component: ContractListComponent }
];

@NgModule({
  declarations: [ContractListComponent, ContractDetailsComponent],
  exports: [
    ContractListComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    ContractResolverService
  ]
})
export class ContractsModule { }
