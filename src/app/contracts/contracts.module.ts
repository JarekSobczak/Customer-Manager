import {NgModule} from '@angular/core';
import {ContractListComponent} from './contract-list/contract-list.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import { ContractDetailsComponent } from './contract-details/contract-details.component';

const routes:Routes = [
  {path: 'contracts/:id', component: ContractDetailsComponent},
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
  ]
})
export class ContractsModule { }
