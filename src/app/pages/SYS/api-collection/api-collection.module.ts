import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiCollectionPageRoutingModule } from './api-collection-routing.module';

import { ApiCollectionPage } from './api-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiCollectionPageRoutingModule
  ],
  declarations: [ApiCollectionPage]
})
export class ApiCollectionPageModule {}
