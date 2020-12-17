import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPage} from './routed/pages/main/main.page';
import {ReferencedataPage} from './routed/pages/referencedata/referencedata.page';
import {AdsPage} from './routed/pages/ads/ads.page';
import {EnginesPage} from './routed/pages/engines/engines.page';
import {ModelsPage} from './routed/pages/models/models.page';
import {UsersPage} from './routed/pages/users/users.page';
import {VehiclesPage} from './routed/pages/vehicles/vehicles.page';
import {TestsPage} from './routed/pages/tests/tests.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'referencedata/:tableName',
    component: ReferencedataPage
  },
  {
    path: 'ads',
    component: AdsPage
  },
  {
    path: 'engines',
    component: EnginesPage
  },
  {
    path: 'models',
    component: ModelsPage
  },
  {
    path: 'users',
    component: UsersPage
  },
  {
    path: 'vehicles',
    component: VehiclesPage
  },
  {
    path: 'vehicles',
    component: VehiclesPage
  },
  {
    path: 'tests',
    component: TestsPage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule {}
