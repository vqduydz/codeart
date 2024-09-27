import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntegrationProviderDetailPageRoutingModule } from './integration-provider-detail-routing.module';

import { IntegrationProviderDetailPage } from './integration-provider-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntegrationProviderDetailPageRoutingModule
  ],
  declarations: [IntegrationProviderDetailPage]
})
export class IntegrationProviderDetailPageModule {}
