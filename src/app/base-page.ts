import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { lib } from './services/static/global-functions';
import { APIList } from './services/static/global-variable';
// import { PopoverPage } from "./pages/SYS/popover/popover.page";
import { Subject, Subscription, concat, of, distinctUntilChanged, tap, switchMap, catchError, filter, mergeMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
 template: '',
 providers: [],
})
export abstract class PageBase implements OnInit {
 page = { title: '' };
 formGroup!: FormGroup;

 env!: any;
 route!: any;
 navCtrl!: any;
 alertCtrl!: any;
 popoverCtrl!: any;
 pageProvider!: any;
 modalController!: any;
 loadingController!: any;

 //Detail page
 id: any;
 cdr: any;
 submitAttempt = false;

 item: any;
 items: any = [];
 selectedItems: any = [];

 localQuery: any = {};

 query: any = {
  Keyword: '',
  Take: 100,
  Skip: 0,
 };

 pageConfig: any = {
  pageCode: '',
  pageName: '',
  pageTitle: '',
  pageRemark: '',
  pageIcon: 'star',
  pageColor: 'primary',

  isDetailPage: false,
  isShowMore: false,
  isShowSearch: false,
  isShowCheck: false,
  isShowFeature: false,
  infiniteScroll: true,
  forceLoadData: true,
  refresher: true,
  showSpinner: true,
  isEndOfData: false,
  didEnter: false,
  isMainPageActive: true,
  isSubActive: false,
  isFeatureAsMain: false,
  sort: [],
 };

 subscriptions: Subscription[] = [];

 //

 //Data load
 preLoadData(event = null) {
  this.clearData();
  this.loadData();
 }

 clearData() {
  this.pageConfig.showSpinner = true;
  this.pageConfig.isEndOfData = false;
  // this.query.Keyword = '';
  this.items = [];
 }

 loadAnItem(event = null) {
  this.id = typeof this.id == 'string' ? parseInt(this.id) : this.id;

  if (this.id) {
   this.pageProvider
    .getAnItem(this.id, null)
    .then((ite: any) => {
     this.item = ite;
     this.loadedData(event);
    })
    .catch((err: any) => {
     console.log(err);

     // if(err.status = 404){
     //     this.nav('not-found', 'back');
     // }
     // else{
     //     this.item = null;
     //     this.loadedData(event);
     // }
    });
  } else if (this.id == 0) {
   if (!this.item) this.item = {};

   Object.assign(this.item, this.DefaultItem);
   this.loadedData(event);
  } else {
   this.loadedData(event);
  }
 }

 parseSort() {
  let sortTerms = this.pageConfig.sort.map((m: any) => m.Dimension + (m.Order == 'DESC' ? '_desc' : ''));
  if (sortTerms.length) {
   this.query.SortBy = '[' + sortTerms.join(',') + ']';
  }
 }

 loadData(event = null) {
  if (this.pageConfig.isDetailPage) {
   this.loadAnItem(event);
  } else {
   this.parseSort();
   if (this.pageProvider && !this.pageConfig.isEndOfData) {
    if (event == 'search') {
     this.pageProvider.read(this.query, this.pageConfig.forceLoadData).then((result: any) => {
      if (result.data.length == 0) {
       this.pageConfig.isEndOfData = true;
      }
      this.items = result.data;
      this.loadedData(null);
     });
    } else {
     this.query.Skip = this.items.length;
     this.pageProvider
      .read(this.query, this.pageConfig.forceLoadData)
      .then((result: any) => {
       if (result.data.length == 0) {
        this.pageConfig.isEndOfData = true;
       }
       if (result.data.length > 0) {
        let firstRow = result.data[0];
        //Fix dupplicate rows
        if (this.items.findIndex((d: any) => d.Id == firstRow.Id) == -1) {
         this.items = [...this.items, ...result.data];
         // console.log(this.items);
        }
       }

       this.loadedData(event);
      })
      .catch((err: any) => {
       if (err.message != null) {
        this.env.showMessage(err.message, 'danger');
       } else {
        this.env.showTranslateMessage('Cannot extract data', 'danger');
       }

       this.loadedData(event);
      });
    }
   } else {
    this.loadedData(event);
   }
  }
 }

 DefaultItem = { Id: 0, IsDisabled: false };
 nav(URL: string, direction = 'forward', data = null) {
  event?.preventDefault();
  event?.stopPropagation();

  if (direction == 'forward') {
   if (data) {
    this.navCtrl.navigateForward(URL, data);
   } else {
    this.navCtrl.navigateForward(URL);
   }
  } else if (direction == 'back') {
   this.navCtrl.navigateBack(URL);
  } else {
   this.navCtrl.navigateRoot(URL);
  }
 }
 loadedData(event: any, ignoredFromGroup = false) {
  this.pageConfig.showSpinner = false;
  event?.target?.complete();

  if (this.pageConfig.isDetailPage) {
   if (this.item) {
    if (this.item.hasOwnProperty('IsDeleted') && this.item.IsDeleted) this.nav('not-found', 'back');
    this.formGroup?.patchValue(this.item);
    this.formGroup?.markAsPristine();
    this.cdr?.detectChanges();

    if (this.item.IsDisabled) this.pageConfig.canEdit = false;
   }

   if ((!this.item || this.id == 0) && this.pageConfig.canAdd) {
    if (!this.item) this.item = { Id: 0, IsDisabled: false };
    else Object.assign(this.item, this.DefaultItem);

    this.pageConfig.canEdit = this.pageConfig.canAdd;
    // this.formGroup?.reset();
    // this.formGroup?.patchValue(this.item);
   }

   if (!(this.pageConfig.canEdit || (this.pageConfig.canAdd && this.item.Id == 0) || ignoredFromGroup)) {
    this.formGroup?.disable();
   }
  }
 }

 refresh(event = null) {
  this.selectedItems = [];
  if (!this.pageConfig.showSpinner) {
   this.clearData();
   this.env.setStorage('saved-query-' + this.pageConfig.pageName, this.query);
   this.loadData(event);
  }
 }

 events(e: any) {
  console.log(e);
 }

 ngOnInit() {
  let pageUrl = '';
  if (this.route && !this.pageConfig.pageCode) {
   this.pageConfig.pageCode = this.route.snapshot?.routeConfig?.component?.name;
   this.id = this.route.snapshot?.paramMap?.get('id');
   pageUrl = this.navCtrl.router.routerState.snapshot.url + '/';
  } else if (this.pageConfig.pageCode == 'help') {
   pageUrl = '/' + this.pageConfig.pageCode + '/';
  } else {
   //pageUrl = this.pageConfig.pageCode + '/';
   pageUrl = this.navCtrl.router.routerState.snapshot.url + '/';
  }

  if (this.navCtrl && this.env.user && this.env.user.Forms) {
   console.log('snapshot.url', this.navCtrl.router.routerState.snapshot.url);
   let currentForm = this.env.user.Forms.find((d: any) => pageUrl.startsWith('/' + d.Code + '/') && (d.Type == 0 || d.Type == 1 || d.Type == 2));
   console.log({ pageUrl, currentForm });

   if (currentForm) {
    this.pageConfig.pageName = currentForm.Code;
    this.pageConfig.pageTitle = currentForm.Name;
    this.pageConfig.pageIcon = currentForm.Icon;
    this.pageConfig.pageColor = currentForm.BadgeColor;
    this.pageConfig.pageRemark = currentForm.Remark;
    this.pageConfig.canEditHelpContent = true;

    let permissionList = this.env.user.Forms.filter((d: any) => d.IDParent == currentForm.Id);
    if (permissionList.length) {
     permissionList.forEach((p: any) => {
      this.pageConfig[p.Code] = true;
     });
    }
   }
  }

  this.subscriptions.push(
   this.env.getEvents().subscribe((data: any) => {
    if (data.Code == 'changeBranch') {
     this.preLoadData(null);
    } else if (data.Code == 'app:loadedLocalData') {
     this.env.checkFormPermission(this.navCtrl.router.routerState.snapshot.url).then((result: Boolean) => {
      if (!result) this.nav('/default');
     });
    } else if (!this.pageConfig.isDetailPage && data.Code == this.pageConfig.pageName) {
     this.refresh(null);
    } else {
     this.events(data);
    }
   }),
  );

  if (this.env.user?.UserSetting?.IsCacheQuery.Value) {
   this.env
    .getStorage('saved-query-' + this.pageConfig.pageName)
    .then((result: any) => {
     if (result) {
      this.query = result;
     }
     this.preLoadData();
    })
    .catch((err: any) => {
     this.preLoadData();
    });
  } else {
   this.preLoadData();
  }
 }
}
