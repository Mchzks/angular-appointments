import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listAppointments: any[] = [];

  addAppoinment(appoinment: any) {
    this.listAppointments.push(appoinment);
  }

  delete(index: number) {
    this.listAppointments.splice(index, 1);
  }

}
