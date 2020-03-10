import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {MessageService} from '../../core/message.service';
import {Customer} from '../model';

@Component({
  selector: 'app-customer-browser',
  templateUrl: './customer-browser.component.html',
  styleUrls: ['./customer-browser.component.css']
})
export class CustomerBrowserComponent implements OnInit {
  customers: Customer[];
  customer: Customer;

  constructor(private customerService: CustomerService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer).subscribe(
      () => {
        this.messageService.success('Usunięto klienta!');
        this.refresh();
      });
  }

  onShift(direction: string) {
    const idx = this.customers.indexOf(this.customer);
    if (idx > 0 && direction === 'left') {
      this.customer = this.customers[idx - 1];
    } else if (direction === 'right' && idx < this.customers.length - 1) {
      this.customer = this.customers[idx + 1];
    }
  }

  private refresh() {
    this.customerService.getCustomers().subscribe(response => {
        this.customers = response;
        this.customer = this.customers[0];
      });
  }
}
