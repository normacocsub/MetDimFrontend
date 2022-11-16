import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RomboMetComponent } from './rombo-met.component';
import { RomboMetRoutingModule } from './rombo-routing.module';



@NgModule({
  declarations: [
    RomboMetComponent,
  ],
  imports: [
    CommonModule,
    RomboMetRoutingModule
  ]
})
export class RomboMetModule { }
