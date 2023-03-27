import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cabina2PageRoutingModule } from './cabina2-routing.module';

import { Cabina2Page } from './cabina2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cabina2PageRoutingModule
  ],
  declarations: [Cabina2Page]
})
export class Cabina2PageModule {}
