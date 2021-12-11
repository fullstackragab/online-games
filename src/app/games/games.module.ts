import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    MainComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
