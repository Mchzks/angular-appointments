import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-appoinments',
  templateUrl: './list-appoinments.component.html',
  styleUrls: ['./list-appoinments.component.css']
})
export class ListAppoinmentsComponent implements OnInit {

  @Input() appoinmentList: any;
  @Output() deleteAppoinment = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(index: number) {
    this.deleteAppoinment.emit(index);
  }
}
