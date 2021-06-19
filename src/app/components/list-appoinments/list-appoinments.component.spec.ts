import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppoinmentsComponent } from './list-appoinments.component';

describe('ListAppoinmentsComponent', () => {
  let component: ListAppoinmentsComponent;
  let fixture: ComponentFixture<ListAppoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppoinmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
