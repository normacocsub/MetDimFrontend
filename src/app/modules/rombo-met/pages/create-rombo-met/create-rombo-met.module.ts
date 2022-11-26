import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRomboMetComponent } from './create-rombo-met.component';
import { CreateRomboMetRoutingModule } from './create-rombo-met-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThreatIdentificationComponent } from './components/threat-identification/threat-identification.component';
import { VulnerabilityPeopleComponent } from './components/vulnerability-people/vulnerability-people.component';
import { ResourceVulnerabilityComponent } from './components/resource-vulnerability/resource-vulnerability.component';
import { VulnerabilitySystemsProcessesComponent } from './components/vulnerability-systems-processes/vulnerability-systems-processes.component';
import { FormulaComponent } from './components/formula/formula.component';
import { NewConsolidatedComponent } from './components/new-consolidated/new-consolidated.component';
import { ComponentModule } from '../../components/component.module';




@NgModule({
  declarations: [
    CreateRomboMetComponent,
    ThreatIdentificationComponent,
    VulnerabilityPeopleComponent,
    ResourceVulnerabilityComponent,
    VulnerabilitySystemsProcessesComponent,
    FormulaComponent,
    NewConsolidatedComponent,
  ],
  imports: [
    CommonModule,
    CreateRomboMetRoutingModule,
    SharedModule,
    ComponentModule
  ]
})
export class CreateRomboMetModule { }
