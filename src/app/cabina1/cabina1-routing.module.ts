import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cabina1Page } from './cabina1.page';

const routes: Routes = [
  {
    path: '',
    component: Cabina1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cabina1PageRoutingModule {}
