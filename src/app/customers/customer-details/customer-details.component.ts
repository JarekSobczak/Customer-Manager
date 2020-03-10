import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer, CustomerType} from '../model';
import {MessageService} from '../../core/message.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: Customer;
  @Output() shift = new EventEmitter<string>();
  isActive: boolean = true;
  showPhoto: boolean = false;
  colorName: string = 'blue';
  CustomerType = CustomerType;


  constructor(private messageService: MessageService) {
  }

  changeColor() {
    this.colorName = this.colorName === 'blue' ? 'red' : 'blue';
    this.messageService.success('Zmieniono kolor');
  }

  ngOnInit(): void {
  }

  left() {
    this.shift.emit('left');
  }

  right() {
    this.shift.emit('right');
  }
}
