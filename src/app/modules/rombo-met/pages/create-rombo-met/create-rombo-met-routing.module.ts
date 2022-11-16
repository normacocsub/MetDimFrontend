import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateRomboMetComponent } from "./create-rombo-met.component";

const routes: Routes = [{ path: '', component: CreateRomboMetComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateRomboMetRoutingModule { }