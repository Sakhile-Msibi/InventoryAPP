import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { InventoryDetailComponent } from './inventory-details/inventory-detail/inventory-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryDetailsComponent,
    InventoryDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
