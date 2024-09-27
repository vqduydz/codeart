import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchemaPageRoutingModule } from './schema-routing.module';

import { SchemaPage } from './schema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchemaPageRoutingModule
  ],
  declarations: [SchemaPage]
})
export class SchemaPageModule {}
