import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Customer} from './model';
import {Config, CONFIG} from '../model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient, @Inject(CONFIG) private config: Config) {
  }

  getCustomers() {
    return this.httpClient.get<Customer[]>(`${this.config.apiUrl}/customers`);
  }

  createCustomer(customer: Customer) {

    return this.httpClient.post(`${this.config.apiUrl}/customers`, customer,{headers:new HttpHeaders({
        'Content-Type':'application/json'
      })});
  }

  deleteCustomer(customer:Customer){
    return this.httpClient.delete(`${this.config.apiUrl}/customers/${customer.name}`);
  }
}
