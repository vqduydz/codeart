import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntegrationTriggerDetailPageRoutingModule } from './integration-trigger-detail-routing.module';

import { IntegrationTriggerDetailPage } from './integration-trigger-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntegrationTriggerDetailPageRoutingModule
  ],
  declarations: [IntegrationTriggerDetailPage]
})
export class IntegrationTriggerDetailPageModule {}
