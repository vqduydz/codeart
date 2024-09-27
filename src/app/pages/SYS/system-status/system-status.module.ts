import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemStatusPageRoutingModule } from './system-status-routing.module';

import { SystemStatusPage } from './system-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemStatusPageRoutingModule
  ],
  declarations: [SystemStatusPage]
})
export class SystemStatusPageModule {}
