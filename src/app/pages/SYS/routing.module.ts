import { Routes } from '@angular/router';

export const SYSRoutes: Routes = [
 { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundPageModule) },
 { path: 'schema', loadChildren: () => import('./schema/schema.module').then((m) => m.SchemaPageModule) },
];
