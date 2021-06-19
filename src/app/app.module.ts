import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListAppoinmentsComponent } from './components/list-appoinments/list-appoinments.component';
import { CreateAppoinmentComponent } from './components/create-appoinment/create-appoinment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListAppoinmentsComponent,
    CreateAppoinmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
