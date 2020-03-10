import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentDate=setInterval(()=>this.setDate(),1000);

  setDate() {
  this.currentDate = Date.now();
  }
}
