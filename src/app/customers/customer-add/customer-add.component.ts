import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {MessageService} from '../../core/message.service';
import {CustomerType} from '../model';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  name: string;
  age: number;
  type: CustomerType;
  CustomerType = CustomerType;

  constructor(private customerService: CustomerService, private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  add() {
    this.customerService.createCustomer({
      name: this.name,
      age: this.age,
      type: this.type,
      description: '',
      photoUrl: '',
      address: {
        city: '',
        street: '',
        number: 0
      },
      categories: []
    }).subscribe(
      () => this.messageService.success('Dodano klienta')
    );
  }

}
