import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NgUikitModule} from '../../projects/ng-uikit/src/lib/ng-uikit.module';
import {CarouselModule} from '../../projects/ng-uikit/src/lib/carousel/carousel.module';
import {CarouselComponent} from './carousel/carousel.component';
import {DatepickerModule} from '../../projects/ng-uikit/src/lib/datepicker/datepicker.module';
import {ChartModule} from '../../projects/ng-uikit/src/lib/chart/chart.module';
import {ChartComponent} from './chart/chart.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {DropdownModule} from '../../projects/ng-uikit/src/lib/dropdown/dropdown.module';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ChartComponent,
    DatepickerComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    NgUikitModule,
    CarouselModule,
    DatepickerModule,
    DropdownModule,
    ChartModule,
    RouterModule.forRoot([
      {path: 'Carousel', component: CarouselComponent},
      {path: 'Chart', component: ChartComponent},
      {path: 'Datepicker', component: DatepickerComponent},
      {path: 'Dropdown', component: DropdownComponent}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
