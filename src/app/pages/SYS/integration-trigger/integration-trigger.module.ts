import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntegrationTriggerPageRoutingModule } from './integration-trigger-routing.module';

import { IntegrationTriggerPage } from './integration-trigger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntegrationTriggerPageRoutingModule
  ],
  declarations: [IntegrationTriggerPage]
})
export class IntegrationTriggerPageModule {}
