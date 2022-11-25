import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RomboMetComponent } from './rombo-met.component';
import { RomboMetRoutingModule } from './rombo-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ComponentModule } from './components/component.module';

@NgModule({
  declarations: [
    RomboMetComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RomboMetRoutingModule,
    ComponentModule
  ]
})
export class RomboMetModule { }
