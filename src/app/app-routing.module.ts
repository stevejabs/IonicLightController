import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lights', pathMatch: 'full' },
  { path: 'lights', loadChildren: './lights/lights.module#LightsPageModule' },
  { path: 'bulb', loadChildren: './bulb/bulb.module#BulbPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
