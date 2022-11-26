import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InformationComponent } from './information/information.component';
import { CardDangerQuestionComponent } from './card-danger-question/card-danger-question.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    CarouselComponent,
    InformationComponent,
    CardDangerQuestionComponent
  ],
  imports: [
    MaterialModule,
    SharedModule
  ],
  exports: [
    ToolbarComponent,
    CarouselComponent,
    InformationComponent,
    CardDangerQuestionComponent
  ],
  providers: [ ]
})
export class ComponentModule { }
