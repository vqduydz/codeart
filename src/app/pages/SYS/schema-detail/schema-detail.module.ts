import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchemaDetailPageRoutingModule } from './schema-detail-routing.module';

import { SchemaDetailPage } from './schema-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchemaDetailPageRoutingModule
  ],
  declarations: [SchemaDetailPage]
})
export class SchemaDetailPageModule {}
