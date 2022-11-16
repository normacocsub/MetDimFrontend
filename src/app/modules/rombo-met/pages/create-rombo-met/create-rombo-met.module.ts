import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRomboMetComponent } from './create-rombo-met.component';
import { CreateRomboMetRoutingModule } from './create-rombo-met-routing.module';



@NgModule({
  declarations: [
    CreateRomboMetComponent
  ],
  imports: [
    CommonModule,
    CreateRomboMetRoutingModule
  ]
})
export class CreateRomboMetModule { }
