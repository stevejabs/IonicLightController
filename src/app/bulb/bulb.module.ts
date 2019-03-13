import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BulbPage } from './bulb.page';

import { ColorHueModule } from 'ngx-color/hue';

const routes: Routes = [
  {
    path: '',
    component: BulbPage
  }
];

@NgModule({
  imports: [
    ColorHueModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BulbPage]
})
export class BulbPageModule {}
