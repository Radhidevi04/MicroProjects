import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemNoComponent } from './system-no/system-no.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { LabService } from './lab.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SystemNoComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LabService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
