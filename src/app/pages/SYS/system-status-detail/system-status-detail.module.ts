import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemStatusDetailPageRoutingModule } from './system-status-detail-routing.module';

import { SystemStatusDetailPage } from './system-status-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemStatusDetailPageRoutingModule
  ],
  declarations: [SystemStatusDetailPage]
})
export class SystemStatusDetailPageModule {}
