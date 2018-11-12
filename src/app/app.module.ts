import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PrismModule} from '@ngx-prism/core';

import {AppComponent} from './app.component';
import {NgUikitModule} from '../../projects/ng-uikit/src/lib/ng-uikit.module';
import {CarouselModule} from '../../projects/ng-uikit/src/lib/carousel/carousel.module';
import {CarouselComponent} from './carousel/carousel.component';
import {DatepickerModule} from '../../projects/ng-uikit/src/lib/datepicker/datepicker.module';
import {ChartModule} from '../../projects/ng-uikit/src/lib/chart/chart.module';
import {ChartComponent} from './chart/chart.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {DropdownModule} from '../../projects/ng-uikit/src/lib/dropdown/dropdown.module';
import {ModalComponent} from './modal/modal.component';
import {AccordionComponent} from './accordion/accordion.component';
import {TooltipComponent} from './tooltip/tooltip.component';
import {CardComponent} from './card/card.component';
import {DatatableComponent} from './datatable/datatable.component';
import {TabComponent} from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    ChartComponent,
    DatepickerComponent,
    DropdownComponent,
    ModalComponent,
    AccordionComponent,
    TooltipComponent,
    CardComponent,
    DatatableComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    NgUikitModule,
    CarouselModule,
    DatepickerModule,
    DropdownModule,
    ChartModule,
    PrismModule,
    RouterModule.forRoot([
      {path: 'Accordion', component: AccordionComponent},
      {path: 'Card', component: CardComponent},
      {path: 'Carousel', component: CarouselComponent},
      {path: 'Chart', component: ChartComponent},
      {path: 'Datatable', component: DatatableComponent},
      {path: 'Datepicker', component: DatepickerComponent},
      {path: 'Dropdown', component: DropdownComponent},
      {path: 'Modal', component: ModalComponent},
      {path: 'Tab', component: TabComponent},
      {path: 'Tooltip', component: TooltipComponent},
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
