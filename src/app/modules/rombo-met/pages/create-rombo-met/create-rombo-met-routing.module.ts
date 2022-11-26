import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormulaComponent } from "./components/formula/formula.component";
import { NewConsolidatedComponent } from "./components/new-consolidated/new-consolidated.component";
import { ResourceVulnerabilityComponent } from "./components/resource-vulnerability/resource-vulnerability.component";
import { ThreatIdentificationComponent } from "./components/threat-identification/threat-identification.component";
import { VulnerabilityPeopleComponent } from "./components/vulnerability-people/vulnerability-people.component";
import { VulnerabilitySystemsProcessesComponent } from "./components/vulnerability-systems-processes/vulnerability-systems-processes.component";

const routes: Routes = [
    
    { path: '',   redirectTo: '/identificacion-amenazas', pathMatch: 'full' },
    { path : 'identificacion-amenazas', component : ThreatIdentificationComponent, pathMatch: 'full'},
    { path : 'vulnerabildad-personas', component : VulnerabilityPeopleComponent, pathMatch: 'full'},
    { path : 'vulnerabildad-recursos', component : ResourceVulnerabilityComponent, pathMatch: 'full'},
    { path : 'vulnerabildad-sistemas-procesos', component : VulnerabilitySystemsProcessesComponent, pathMatch: 'full'},
    { path : 'consolidado-nuevo', component : NewConsolidatedComponent, pathMatch: 'full'},
    { path : 'formula', component : FormulaComponent, pathMatch: 'full'},
    { path : '**', component : ThreatIdentificationComponent,pathMatch: 'full'} ,
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateRomboMetRoutingModule { }