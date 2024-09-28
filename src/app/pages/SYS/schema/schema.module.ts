import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchemaPageRoutingModule } from './schema-routing.module';

import { SchemaPage } from './schema.page';
import { ToolbarModule } from '../../../components/toolbar/toolbar.module';

@NgModule({
 imports: [CommonModule, FormsModule, IonicModule, SchemaPageRoutingModule, ToolbarModule],
 declarations: [SchemaPage],
})
export class SchemaPageModule {}
