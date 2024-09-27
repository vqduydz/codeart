import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntegrationActionDetailPageRoutingModule } from './integration-action-detail-routing.module';

import { IntegrationActionDetailPage } from './integration-action-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntegrationActionDetailPageRoutingModule
  ],
  declarations: [IntegrationActionDetailPage]
})
export class IntegrationActionDetailPageModule {}
