import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContractService} from '../contract.service';
import {Contract} from '../model';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {

  contract: Contract;

  constructor(private activatedRoute: ActivatedRoute, private contractService: ContractService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      const id = parseInt(param['id']);
      this.contractService.getContract(id).subscribe(contract=>{
        this.contract=contract;
      });
    })
  }

}
