import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArrayExampleComponent } from './array-example/array-example.component';
import { ModelexampleComponent } from './modelexample/modelexample.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayExampleComponent,
    ModelexampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
