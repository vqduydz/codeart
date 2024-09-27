import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { AlertController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import * as signalR from '@microsoft/signalr';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Observer, Subject, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { lib } from '../static/global-functions';

@Injectable({
 providedIn: 'root',
})
/**
 * This service allows manipulation of environment variables
 * @class EnvService
 */
export class EnvService {
 public languageTracking = new Subject<any>();

 /**
  * The lang currently used
  */
 language: any = {
  default: 'vi-VN',
  current: '',
  isDefault: false,
 };

 /**
  * Set current language and translate resources
  * @param value Language code: 'vi-VN' | 'en-US'
  */
 async setLang(value: string) {
  if (!value) value = this.language.default;
  this.translate.use(value);
  this.setStorage('lang', value);
  this.language.current = value;
  this.language.isDefault = this.language.current == this.language.default;
  this.languageTracking.next(this.language);
 }

 /** Get current app version */
 version = environment.appVersion;

 /** Get current logged in user */
 user: any = {};

 /** All cached config */
 configs: any[] = [];

 public configTracking = new Subject<any[]>();

 /** Check enviroment is loaded */
 isloaded = false;

 /** Get current device infomation */
 deviceInfo: any = null;

 /** All branch list */
 rawBranchList = [];

 /** Get all flat tree branch list */
 branchList: any[] = [];

 /** Get all job title list */
 jobTitleList: any[] = [];

 /** Get current branch id */
 selectedBranch: any | null;

 /** Get current branch id and all children branch ids */
 selectedBranchAndChildren: any | null;

 /** All system status list */
 statusList: any[] = [];

 /** All system type list */
 typeList: any[] = [];
 /** Check platform is mobile*/
 isMobile = false;

 /** Check is map library loaded */
 isMapLoaded = false;

 /** Get network infomation */
 networkInfo: any = {
  isOnline: false,
 };

 /** Check app is ready */
 ready: Promise<any> | null;

 /** Last message was shown */
 lastMessage = '';

 /** @deprecated This is an internal implementation detail, do not use. */
 private _storage: Storage | null = null;

 /** app event tracking */
 public EventTracking = new Subject<any>();

 constructor(
  public plt: Platform,
  public storage: Storage,
  public toastController: ToastController,
  public alertCtrl: AlertController,
  public loadingController: LoadingController,
  public translate: TranslateService,
 ) {
  this.isMobile = this.plt.is('mobile');
  this.ready = new Promise((resolve, reject) => {
   this.init().then(resolve).catch(reject);
  });
 }

 /**
  * Init enviroment
  * Create storage service handle
  * Request app load languages
  * Add network listener
  * Connet SignalR
  */
 async init() {
  // If using, define drivers here: await this.storage.defineDriver(/*...*/);
  this._storage = await this.storage.create();
  this.publishEvent({ Code: 'app:loadLang' });
  Network.addListener('networkStatusChange', (status) => {
   this.publishEvent({ Code: 'app:networkStatusChange', status });
   console.log('Network status changed', status);
  });

  this.trackOnline().subscribe((isOnline) => {
   this.networkInfo.isOnline = isOnline;
  });

  const signalRConnection = new signalR.HubConnectionBuilder()
   .configureLogging(signalR.LogLevel.Information)
   .withUrl(environment.signalRServiceDomain + 'notify')
   .withAutomaticReconnect()
   .build();

  signalRConnection
   .start()
   .then(function () {
    console.log('SignalR Connected!');
   })
   .catch(function (err) {
    return console.error(err.toString());
   });

  signalRConnection.on('BroadcastMessage', (e) => {
   //console.log('BroadcastMessage', e);
   //this.publishEvent({})
   switch (e.code) {
    case 'POSOrderPaymentUpdate':
    case 'POSOrderFromCustomer':
    case 'POSOrderFromStaff':
    case 'POSSupport':
    case 'POSCallToPay':
    case 'POSLockOrderFromStaff':
    case 'POSLockOrderFromCustomer':
    case 'POSUnlockOrderFromStaff':
    case 'POSUnlockOrderFromCustomer':
    case 'POSLockOrder':
    case 'POSUnlockOrder':
    case 'POSOrderSplittedFromStaff':
    case 'POSOrderMergedFromStaff':
    case 'SOPaymentUpdate':
     e.code = 'app:' + e.code;
     this.publishEvent(e);
     break;
    case 'AppReload':
     location.reload();
     break;
    case 'SystemMessage':
     this.showMessage(e.value, e.name);
     break;
    case 'AppReloadOldVersion':
     if (e.value.localeCompare(this.version) > 0) {
      location.reload();
     }
     break;
    case 'SystemAlert':
     this.showAlert(e.value, null, e.name);
     break;
    default:
     break;
   }
  });
  signalRConnection.on('SendMessage', (user, message) => {
   console.log('SendMessage', user, message);
   //this.publishEvent({})
  });
  signalRConnection.on('SaleOrdersUpdated', (IDBranch, Ids) => {
   console.log('SaleOrdersUpdated', IDBranch, Ids);
   this.publishEvent({ Code: 'sale-order-mobile' });
  });
 }

 /**
  * Publish event for application
  * Can be used to transfer data anywhere on the app
  *
  * @param data Data to transfer, data.Code is recommended
  */
 publishEvent(data: any) {
  this.EventTracking.next(data);
 }

 /** Get enviroment event tracking */
 getEvents(): Subject<any> {
  return this.EventTracking;
 }

 /** Check window network event */
 trackOnline() {
  return merge<any>(
   fromEvent(window, 'offline').pipe(map(() => false)),
   fromEvent(window, 'online').pipe(map(() => true)),
   new Observable((sub: Observer<boolean>) => {
    sub.next(navigator.onLine);
    sub.complete();
   }),
  );
 }

 /**
  * Translate message and pass to showMessage method
  *
  * @param messageToTranslate The message in en-US language
  * @param [color=''] The color of message
  * @param [value=null] The value to bind in message
  * @param duration The time (ms) to show message
  * @param showCloseButton Show a close button instead of turning itself off (use alert instead of toast)
  */
 showTranslateMessage(messageToTranslate: any, color = '', value = null, duration = 5000, showCloseButton = false) {
  this.translate.get(messageToTranslate, { value: value }).subscribe((message: string) => {
   this.showMessage(message, color, duration, showCloseButton);
  });
 }

 /**
  * Show the message to end-user. Ignored if message equal to the last message in 5 seconds
  * @param message The message to show
  * @param color The color of message
  * @param duration The time (ms) to show message
  * @param showCloseButton Show a close button instead of turning itself off (use alert instead of toast)
  */
 showMessage(message: any, color = 'warning', duration = 5000, showCloseButton = false) {
  if (this.lastMessage == message) return;
  this.lastMessage = message;

  setTimeout(() => {
   this.lastMessage = '';
  }, 5000);

  if (!showCloseButton) {
   this.toastController
    .create({
     message: message,
     color: color,
     duration: duration,
     buttons: [showCloseButton ? { text: 'Close', role: 'close' } : {}],
    })
    .then((toast) => {
     toast.present();
    });
  } else {
   this.alertCtrl
    .create({
     //header: 'DMS',
     //subHeader: '---',
     message: message,
     buttons: [
      // {
      //     text: 'Không',
      //     role: 'cancel',
      //     handler: () => {
      //         //console.log('Không xóa');
      //     }
      // },
      {
       text: 'OK',
       cssClass: 'danger-btn',
       handler: () => {},
      },
     ],
    })
    .then((alert) => {
     alert.present();
    });
  }
 }

 /** @deprecated Deprecated, do not use. */
 showAlert(message: any, subHeader = null, header = null, okText = 'OK') {
  let option: any = {
   header: header,
   subHeader: subHeader,
   message: message,
   buttons: [
    {
     text: okText,
     cssClass: 'danger-btn',
     handler: () => {},
    },
   ],
  };

  this.alertCtrl.create(option).then((alert) => {
   alert.present();
  });
 }

 /**
  * Show prompt message question.
  * @param message The message to show
  * @param subHeader The small text abow message
  * @param header The header of the message
  * @param okText OK button text
  * @param cancelText Cancel button text
  * @param inputs Extra input
  * @returns Promise resolve if end-user click ok button, reject if not.
  */
 showPrompt(message: any, subHeader = null, header = null, okText = 'Đồng ý', cancelText = 'Không', inputs = null) {
  return new Promise((resolve, reject) => {
   let option: any = {
    header: header,
    subHeader: subHeader,
    message: message,
    buttons: [],
   };

   if (cancelText)
    option.buttons.push({
     text: cancelText,
     role: 'cancel',
     handler: () => {
      reject(false);
     },
    });

   if (okText) {
    option.buttons.push({
     text: okText,
     cssClass: 'danger-btn',
     handler: (alertData: any) => {
      resolve(alertData);
     },
    });
   }

   if (inputs) option.inputs = inputs;

   this.alertCtrl.create(option).then((alert) => {
    alert.present();
   });
  });
 }

 /**
  * Show loading message to end-user
  * @param message The message to show
  * @param promise The promise funtion to wait
  * @returns Resolve if the promise funtion completed
  */
 showLoading(message: any, promise: any) {
  return new Promise((resolve, reject) => {
   this.loadingController.create({ cssClass: 'my-custom-class', message: message }).then((loading) => {
    loading.present();
    setTimeout(() => {
     if (typeof promise == 'function') promise = promise();

     promise
      .then((result: any) => {
       if (loading) loading.dismiss();
       resolve(result);
      })
      .catch((err: any) => {
       if (loading) loading.dismiss();
       reject(err);
      });
    }, 0);
   });
  });
 }

 /**
  * Get storage
  * @param key The key to get storage
  * @returns Return the storage
  */
 getStorage(key: any) {
  return this._storage?.get(key)!;
 }

 /**
  * Set storage value
  * @param key The key to set storage
  * @param value The value to save
  * @returns Return promise
  */
 setStorage(key: string, value: any) {
  return this._storage?.set(key, value)!;
 }

 /**
  * Clear all storage value
  * @returns Return promise
  */
 clearStorage() {
  return this._storage?.clear()!;
 }

 /**
  * Set cookie value
  * @param name Name of cookie
  * @param value The value to save
  * @param days Number of days to save
  */
 setCookie(name: any, value: any, days: any) {
  var expires = '';
  if (days) {
   var date = new Date();
   date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
   expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
 }

 /**
  * Get cookie value
  * @param name Name of cookie
  * @returns Cookie value
  */
 getCookie(name: any) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
   var c = ca[i];
   while (c.charAt(0) == ' ') c = c.substring(1, c.length);
   if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
 }

 /**
  * Clear cookie value
  * @param name Name of cookie
  */
 clearCookie(name: any) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
 }

 /**
  * Build branch tree from rawBranchList
  * @returns Return promise
  */
 //  loadBranch() {
 //   return new Promise((resolve) => {
 //    lib.buildFlatTree(this.rawBranchList, [], true).then((resp: any) => {
 //     this.branchList = [];
 //     this.jobTitleList = [];
 //     console.log('reset branch + jobTitleList');

 //     for (let ix = 0; ix < resp.length; ix++) {
 //      const i: any = resp[ix];
 //      i.Name = i.ShortName ? i.ShortName : i.Name;
 //      i.disabled = true;
 //      if (i.Type != 'TitlePosition') {
 //       this.branchList.push(i);
 //      }
 //      this.jobTitleList.push(Object.assign({}, i));
 //     }
 //     for (let ix = 0; ix < this.branchList.length; ix++) {
 //      const i: any = this.branchList[ix];
 //      i.IDs = [null];
 //      this.getChildrenDepartmentID(i.IDs, i.Id);
 //     }
 //     for (let ix = 0; ix < this.branchList.length; ix++) {
 //      const i: any = this.branchList[ix];
 //      i.Query = JSON.stringify(i.IDs);
 //     }

 //     this.getStorage('selectedBranch').then((val) => {
 //      if (this.user) {
 //       for (let ix = 0; ix < this.user.Branchs.length; ix++) {
 //        const b = this.user.Branchs[ix];
 //        this.enablePermissionNode(b, this.branchList);
 //        this.enablePermissionNode(b, this.jobTitleList);
 //       }

 //       setTimeout(() => {
 //        for (let ix = 0; ix < this.jobTitleList.length; ix++) {
 //         const i: any = this.jobTitleList[ix];
 //         if (i.Type != 'TitlePosition') {
 //          i.disabled = true;
 //         }
 //        }
 //       }, 0);

 //       this.branchList = [...this.branchList];
 //      }

 //      let selected: any = null;

 //      if (val) {
 //       selected = this.branchList.find((d) => d.Id == val && d.disabled == false);
 //      }
 //      if (!selected) {
 //       selected = this.branchList.find((d) => d.Id == this.user.IDBranch);
 //      }

 //      if (selected) {
 //       this.selectedBranch = selected.Id;
 //       this.selectedBranchAndChildren = selected.Query;
 //      } else {
 //       this.selectedBranch = 0;
 //       this.selectedBranchAndChildren = [0];
 //      }

 //      resolve(true);
 //     });
 //    });
 //   });
 //  }

 /**
  * Change enviroment selected branch and publish changeBranch event to app
  */
 changeBranch() {
  this.setStorage('selectedBranch', this.selectedBranch);
  let selectedBranch = this.branchList.find((d) => d.Id == this.selectedBranch);
  this.selectedBranchAndChildren = selectedBranch.Query;
  this.publishEvent({ Code: 'changeBranch' });

  this.configTracking.next(this.configs.filter((d) => d.IDBranch == this.selectedBranch));
 }

 /**
  * Check form permission
  * @param functionCode Function code to check permission
  * @returns Return promise and resolve true if have permission
  */
 checkFormPermission(functionCode: any) {
  return new Promise<boolean>((resolve) => {
   //Chưa đăng nhập
   if (!this.user || !this.user.Id) {
    resolve(false);
   } else {
    if (functionCode == '/default') {
     resolve(false);
    } else if (functionCode == '/not-found') {
     resolve(true);
    } else {
     functionCode = functionCode + '/';
     let form = this.user.Forms.find((d: any) => functionCode.startsWith('/' + d.Code + '/') && (d.Type == 0 || d.Type == 1 || d.Type == 2));
     resolve(form != null);
    }
   }
  });
 }

 getConfig() {}

 /**
  * Get status list by parent Code
  * @param Code Parent status code
  * @returns Return promise and resolve all children status list
  */
 getStatus(Code: string): Promise<any[]> {
  return new Promise((resolve) => {
   let it = this.statusList.find((d) => d.Code == Code);
   if (it) resolve(this.statusList.filter((d) => d.IDParent == it.Id));
   else resolve([]);
  });
 }

 /**
  * Get system type by parent Code
  * @param Code Parent type Code
  * @param AllChild True will return flat tree type
  * @returns Return promise and Resolve type list
  */
 //  getType(Code: string, AllChild = false): Promise<any[]> {
 //   return new Promise((resolve) => {
 //    let it = this.typeList.find((d) => d.Code == Code);
 //    if (it) {
 //     if (AllChild) {
 //      let ids: any = lib.findChildren(this.typeList, it.Id);
 //      let childs = this.typeList.filter((d) => ids.includes(d.Id));
 //      lib.buildFlatTree(childs, [], true, it).then((result: any) => {
 //       resolve(result);
 //      });
 //     } else resolve(this.typeList.filter((d) => d.IDParent == it.Id));
 //    } else resolve([]);
 //   });
 //  }

 //  async getTypeAsync(Code: string, AllChild = false) {
 //   let it = this.typeList.find((d) => d.Code == Code);
 //   if (it) {
 //    if (AllChild) {
 //     let ids: any = lib.findChildren(this.typeList, it.Id);
 //     let childs = this.typeList.filter((d) => ids.includes(d.Id));
 //     return await lib.buildSubNode(childs, [], it, []); //await lib.buildFlatTree(childs, [], true, it);
 //    } else return this.typeList.filter((d) => d.IDParent == it.Id);
 //   } else return [];
 //  }

 /**
  * Get branch by parent Id
  * @param Id Id parent branch
  * @param AllChild True will return flat tree list
  * @returns Return promise and Resolve branch list
  */
 //  getBranch(Id: number, AllChild = false): Promise<any[]> {
 //   return new Promise((resolve) => {
 //    let it = this.branchList.find((d) => d.Id == Id);
 //    if (it) {
 //     if (AllChild) {
 //      let ids: any = lib.findChildren(this.branchList, it.Id);
 //      let childs = this.branchList.filter((d) => ids.includes(d.Id));
 //      lib.buildFlatTree(childs, [], true, it).then((result: any) => {
 //       resolve(result);
 //      });
 //     } else resolve(this.branchList.filter((d) => d.IDParent == it.Id));
 //    } else resolve([]);
 //   });
 //  }

 /**
  * Get job title list by parent Id
  * @param Id Id parent
  * @param AllChild True will return flat tree
  * @returns Return promise and Resolve job title list
  */
 //  getJobTitle(Id: number, AllChild = false): Promise<any[]> {
 //   return new Promise((resolve) => {
 //    let it = this.jobTitleList.find((d) => d.Id == Id);
 //    if (it) {
 //     if (AllChild) {
 //      let ids: any = lib.findChildren(this.jobTitleList, it.Id);
 //      let childs = this.jobTitleList.filter((d) => ids.includes(d.Id));
 //      lib.buildFlatTree(childs, [], true, it).then((result: any) => {
 //       resolve(result);
 //      });
 //     } else resolve(this.jobTitleList.filter((d) => d.IDParent == it.Id));
 //    } else resolve([]);
 //   });
 //  }

 /** @deprecated Deprecated, do not use. */
 //  private enablePermissionNode(id: any, list: any) {
 //   let currentItem = list.find((i: any) => i.Id == id);
 //   if (currentItem) {
 //    currentItem.disabled = false;
 //    lib.markNestedNode(list, id, 'disabled', true);
 //   }
 //  }

 /** @deprecated Deprecated, do not use. */
 private getChildrenDepartmentID(ids: any, id: any) {
  ids.push(id);
  let children = this.branchList.filter((i) => i.IDParent == id);
  for (let ix = 0; ix < children.length; ix++) {
   const i = children[ix];
   this.getChildrenDepartmentID(ids, i.Id);
  }
 }
}
