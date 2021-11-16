import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AreaCalculatorComponent } from './area-trapecio/area-calculator/area-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
