import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, NavController, Platform } from '@ionic/angular';
import { PageBase } from 'src/app/base-page';
import { EnvService } from 'src/app/services/core/env.service';

@Component({
 selector: 'app-not-found',
 templateUrl: './not-found.page.html',
 styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage extends PageBase {
 isShowFeature = true;
 show404 = false;

 funnelChart: any;
 @ViewChild('funnelCanvas') funnelCanvas: any;

 constructor(public actionSheetController: ActionSheetController, public override env: EnvService, public override navCtrl: NavController, public platform: Platform) {
  super();
 }

 override loadedData() {}
}
