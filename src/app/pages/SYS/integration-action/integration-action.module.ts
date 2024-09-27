import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntegrationActionPageRoutingModule } from './integration-action-routing.module';

import { IntegrationActionPage } from './integration-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntegrationActionPageRoutingModule
  ],
  declarations: [IntegrationActionPage]
})
export class IntegrationActionPageModule {}
