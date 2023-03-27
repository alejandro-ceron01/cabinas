import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cabina2Page } from './cabina2.page';

const routes: Routes = [
  {
    path: '',
    component: Cabina2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cabina2PageRoutingModule {}
