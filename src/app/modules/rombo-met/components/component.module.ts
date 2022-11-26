import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    CarouselComponent,
    InformationComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    ToolbarComponent,
    CarouselComponent,
    InformationComponent
  ],
  providers: [ ]
})
export class ComponentModule { }
