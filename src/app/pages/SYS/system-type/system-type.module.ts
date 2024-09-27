import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemTypePageRoutingModule } from './system-type-routing.module';

import { SystemTypePage } from './system-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemTypePageRoutingModule
  ],
  declarations: [SystemTypePage]
})
export class SystemTypePageModule {}
