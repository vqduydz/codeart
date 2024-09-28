import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IonRouterOutlet, MenuController, NavController, Platform, PopoverController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { register } from 'swiper/element/bundle';
// import { AccountService } from './services/account.service';
import { EnvService } from './services/core/env.service';
// import { BRA_BranchProvider, SYS_UserSettingProvider } from './services/static/services.service';

register();
let ga: any;

@Component({
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.scss'],
})
export class AppComponent {
 @ViewChild('search') search: any;
 appTheme = 'default-theme';
 isConnectFail = false;
 appMessages = [];
 appVersion = '';
 canGoBack = false;
 showScrollbar = false;
 showAppMenu = true;

 countForm = 0;
 showMenu = true;
 randomImg = './assets/undraw_art_museum_8or4.svg';

 isShowSearch = false;
 queryMenu = '';
 foundMenu = [];

 pageConfigPageName = '';
 showHelp = false;
 showAppMenuHelp = true;
 title = '';

 @ViewChild(IonRouterOutlet, { static: true }) routerOutlet!: IonRouterOutlet;

 _environment = environment;

 public appPages = [
  { title: 'schema', url: 'schema' },
  { title: 'system-type', url: 'system-type' },
 ];

 constructor(
  public router: Router,
  public navCtrl: NavController,
  public menu: MenuController,
  // public userSettingProvider: SYS_UserSettingProvider,
  // public branchProvider: BRA_BranchProvider,
  public popoverCtrl: PopoverController,
  public env: EnvService,
  // public accountService: AccountService,
  public platform: Platform,
 ) {
  this.appVersion = `v${this.env.version}`;
  let imgs = [
   './assets/undraw_art_museum_8or4.svg',
   './assets/undraw_best_place_r685.svg',
   './assets/undraw_road_sign_mfpo.svg',
   './assets/undraw_street_food_hm5i.svg',
   './assets/undraw_empty.svg',
   './assets/undraw_Container_ship_urt4.svg',
  ];
  let r = Math.floor(Math.random() * imgs.length);
  this.randomImg = imgs[r];

  // this.initializeApp();

  // this.env.getEvents().subscribe((data) => {
  //   switch (data.Code) {
  //     case 'app:ForceUpdate':
  //       this.isConnectFail = true;
  //       this.openAppStore();
  //       break;
  //     case 'app:ConnectFail':
  //       this.isConnectFail = true;
  //       break;
  //     case 'app:ShowAppMessage':
  //       this.appMessageManage(data);
  //       break;
  //     case 'app:ShowMenu':
  //       this.showAppMenu = data.Value;
  //       break;
  //     case 'app:ShowHelp':
  //       this.showHelp = true;
  //       this.pageConfigPageName = data.Value;
  //       this.openHelp();
  //       break;
  //     case 'app:ChangeTheme':
  //       this.updateStatusbar();
  //       break;
  //     case 'app:logout':
  //       accountService.logout().then((_) => {
  //         this.router.navigateByUrl('/login');
  //         this.env.showTranslateMessage('You have log out of the system', 'danger');
  //       });
  //       break;
  //     case 'app:silentlogout':
  //       accountService.logout().then((_) => {
  //         this.router.navigateByUrl('/login');
  //       });
  //       break;
  //     case 'app:updatedUser':
  //       this.countForm = 0;

  //       if (this.env.user && this.env.user.Id && this.env.user.Forms.length) {
  //         this.countForm = this.env.user.Forms.filter((d) => d.Type == 1).length;
  //         if (this.countForm == 1 && this.env.branchList.filter((d) => !d.disabled).length == 1) {
  //           this.showMenu = false;
  //         }
  //         this.loadPinnedMenu();
  //         this.updateStatusbar();
  //       }
  //       break;
  //     case 'app:loadLang':
  //       this.env.getStorage('lang').then((lang) => {
  //         if (lang) {
  //           this.changeLanguage(lang);
  //         } else {
  //           this.changeLanguage();
  //         }
  //       });
  //       break;
  //     default:
  //       if (this.env.version == 'dev') {
  //         this.appMessageManage({
  //           IsShow: true,
  //           Id: 'event',
  //           Icon: 'checkmark-outline',
  //           IsBlink: false,
  //           Color: 'success',
  //           Message: data.Code,
  //         });
  //         setTimeout(() => {
  //           this.appMessageManage({
  //             IsShow: false,
  //             Id: 'event',
  //           });
  //         }, 2000);
  //       }
  //       break;
  //   }
  // });

  this.router.events.subscribe((event: any) => {
   if (ga && event instanceof NavigationEnd) {
    ga('set', 'page', 'test/' + event.urlAfterRedirects);
    ga('send', 'pageview');
    //console.log(event.urlAfterRedirects);
   }

   // if (event) {
   //   //console.log(event);

   //   // (<any>window).ga('set', 'page', event.urlAfterRedirects);
   //   // (<any>window).ga('send', 'pageview');
   // }
  });
 }
}
