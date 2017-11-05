import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormWithValidationComponent } from './reactive-form-with-validation/reactive-form-with-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormWithValidationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
    ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
