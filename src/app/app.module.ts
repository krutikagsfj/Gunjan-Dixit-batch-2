import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {sort} from './mobile-details/sort';


@NgModule({
  declarations: [
    AppComponent,
    MobileDetailsComponent,sort
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
