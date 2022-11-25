import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RomboMetComponent } from './rombo-met.component';

const routes: Routes = [{
  path: '',
  component: RomboMetComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'crear', loadChildren: () => import('./pages/create-rombo-met/create-rombo-met.module').then(m => m.CreateRomboMetModule) }
  ]
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RomboMetRoutingModule { }
