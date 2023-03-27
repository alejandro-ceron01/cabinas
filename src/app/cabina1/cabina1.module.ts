import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cabina1PageRoutingModule } from './cabina1-routing.module';

import { Cabina1Page } from './cabina1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cabina1PageRoutingModule
  ],
  declarations: [Cabina1Page]
})
export class Cabina1PageModule {}
