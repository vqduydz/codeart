import { Routes } from '@angular/router';

export const SYSRoutes: Routes = [
 { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule) },
 { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutPageModule) },
 { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundPageModule) },
 { path: 'setting', loadChildren: () => import('./setting/setting.module').then((m) => m.SettingPageModule) },
 { path: 'profile', loadChildren: () => import('./profile/profile.module').then((m) => m.ProfilePageModule) },
 { path: 'default', loadChildren: () => import('./default/default.module').then((m) => m.DefaultPageModule) },
 { path: 'system-status', loadChildren: () => import('./system-status/system-status.module').then((m) => m.SystemStatusPageModule) },
 { path: 'system-status/:id', loadChildren: () => import('./system-status-detail/system-status-detail.module').then((m) => m.SystemStatusDetailPageModule) },
 { path: 'system-type', loadChildren: () => import('./system-type/system-type.module').then((m) => m.SystemTypePageModule) },
 { path: 'system-type/:id', loadChildren: () => import('./system-type-detail/system-type-detail.module').then((m) => m.SystemTypeDetailPageModule) },
 { path: 'schema', loadChildren: () => import('./schema/schema.module').then((m) => m.SchemaPageModule) },
 { path: 'schema/:id', loadChildren: () => import('./schema-detail/schema-detail.module').then((m) => m.SchemaDetailPageModule) },
 { path: 'api-collection', loadChildren: () => import('./api-collection/api-collection.module').then((m) => m.ApiCollectionPageModule) },
 { path: 'api-collection/:id', loadChildren: () => import('./api-collection-detail/api-collection-detail.module').then((m) => m.ApiCollectionDetailPageModule) },
 { path: 'integration-action', loadChildren: () => import('./integration-action/integration-action.module').then((m) => m.IntegrationActionPageModule) },
 { path: 'integration-action/:id', loadChildren: () => import('./integration-action-detail/integration-action-detail.module').then((m) => m.IntegrationActionDetailPageModule) },
 { path: 'integration-provider', loadChildren: () => import('./integration-provider/integration-provider.module').then((m) => m.IntegrationProviderPageModule) },
 {
  path: 'integration-provider/:id',
  loadChildren: () => import('./integration-provider-detail/integration-provider-detail.module').then((m) => m.IntegrationProviderDetailPageModule),
 },
 { path: 'integration-trigger', loadChildren: () => import('./integration-trigger/integration-trigger.module').then((m) => m.IntegrationTriggerPageModule) },
 {
  path: 'integration-trigger/:id',
  loadChildren: () => import('./integration-trigger-detail/integration-trigger-detail.module').then((m) => m.IntegrationTriggerDetailPageModule),
 },
];
