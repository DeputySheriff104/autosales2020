import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPage} from './routed/pages/main/main.page';
import {ReferencedataPage} from './routed/pages/referencedata/referencedata.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'referencedata/:tableName',
    component: ReferencedataPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule {}
