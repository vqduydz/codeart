import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntegrationProviderPageRoutingModule } from './integration-provider-routing.module';

import { IntegrationProviderPage } from './integration-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntegrationProviderPageRoutingModule
  ],
  declarations: [IntegrationProviderPage]
})
export class IntegrationProviderPageModule {}
