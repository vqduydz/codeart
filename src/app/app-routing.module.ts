import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SYSRoutes } from './pages/SYS/routing.module';

const routes: Routes = [
 { path: 'folder/:id', loadChildren: () => import('./pages/folder/folder.module').then((m) => m.FolderPageModule) },
 { path: '', redirectTo: 'folder/Inbox', pathMatch: 'full' },
 { path: '**', redirectTo: '/not-found' },
];
let allRoutes = [...SYSRoutes, ...routes];
@NgModule({
 imports: [RouterModule.forRoot(allRoutes, { preloadingStrategy: PreloadAllModules })],
 exports: [RouterModule],
})
export class AppRoutingModule {}
