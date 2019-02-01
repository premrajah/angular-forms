import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFormTdfComponent } from './angular-form-tdf/angular-form-tdf.component';
import { AngularFormReactiveComponent } from './angular-form-reactive/angular-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularFormTdfComponent,
    AngularFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
