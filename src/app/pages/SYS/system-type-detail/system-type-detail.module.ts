import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemTypeDetailPageRoutingModule } from './system-type-detail-routing.module';

import { SystemTypeDetailPage } from './system-type-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemTypeDetailPageRoutingModule
  ],
  declarations: [SystemTypeDetailPage]
})
export class SystemTypeDetailPageModule {}
