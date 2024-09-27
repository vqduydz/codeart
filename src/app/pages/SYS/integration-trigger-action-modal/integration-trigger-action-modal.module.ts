import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntegrationTriggerActionModalPageRoutingModule } from './integration-trigger-action-modal-routing.module';

import { IntegrationTriggerActionModalPage } from './integration-trigger-action-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntegrationTriggerActionModalPageRoutingModule
  ],
  declarations: [IntegrationTriggerActionModalPage]
})
export class IntegrationTriggerActionModalPageModule {}
