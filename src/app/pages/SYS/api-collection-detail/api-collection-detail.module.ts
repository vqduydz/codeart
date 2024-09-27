import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiCollectionDetailPageRoutingModule } from './api-collection-detail-routing.module';

import { ApiCollectionDetailPage } from './api-collection-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiCollectionDetailPageRoutingModule
  ],
  declarations: [ApiCollectionDetailPage]
})
export class ApiCollectionDetailPageModule {}
