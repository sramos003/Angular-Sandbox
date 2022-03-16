import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImplementationsModule } from '../services/implementations.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ImplementationsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
