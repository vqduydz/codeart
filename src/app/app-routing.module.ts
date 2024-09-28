import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SYSRoutes } from './pages/SYS/routing.module';

const routes: Routes = [
 { path: '', redirectTo: '/schema', pathMatch: 'full' },
 { path: '**', redirectTo: '/not-found' },
];
let allRoutes = [...SYSRoutes, ...routes];
@NgModule({
 imports: [RouterModule.forRoot(allRoutes, { preloadingStrategy: PreloadAllModules, useHash: true })],
 exports: [RouterModule],
})
export class AppRoutingModule {}
