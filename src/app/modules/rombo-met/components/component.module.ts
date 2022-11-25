import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [ MaterialModule ],
  exports: [
    ToolbarComponent
  ],
  providers: [ ]
})
export class ComponentModule { }
