import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RomboMetComponent } from './rombo-met.component';

const routes: Routes = [{
    path: '',
    component: RomboMetComponent,
    children: [
        { path: '', redirectTo: 'crear', pathMatch: 'full'},
        { path: 'crear', loadChildren: () => import('./pages/create-rombo-met/create-rombo-met.module').then(m => m.CreateRomboMetModule)}
    ]
}]


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class RomboMetRoutingModule { }