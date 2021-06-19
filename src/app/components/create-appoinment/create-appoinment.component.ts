import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-appoinment',
  templateUrl: './create-appoinment.component.html',
  styleUrls: ['./create-appoinment.component.css']
})
export class CreateAppoinmentComponent implements OnInit {

  name = '';
  date = '';
  hour = '';
  sympton = '';

  formIncorrect = false;
  @Output() newAppoinment = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addAppointment() {
    if(this.name == '' || this.date == '' || this.hour == '' || this.sympton == '') {
      this.formIncorrect = true;
      return;
    }
    this.formIncorrect = false;

    const appoinment = {
      name: this.name,
      date: this.date,
      hour: this.hour,
      sympton: this.sympton
    };
    console.log(appoinment);
    this.newAppoinment.emit(appoinment);
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.date = '';
    this.hour = '';
    this.sympton = '';
  }
}
