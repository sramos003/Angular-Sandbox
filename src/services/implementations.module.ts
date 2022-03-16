import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpConfiguredClient } from '../http-config/http-configured-client';
import { HttpConfiguredModule } from '../http-config/http-configured.module';
import { FeinDetailsService } from './fein-details-service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpConfiguredModule,
  ],
  providers: [ FeinDetailsService, HttpConfiguredClient ]
})
export class ImplementationsModule { }
