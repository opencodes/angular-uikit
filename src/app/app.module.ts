import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgUikitModule} from '../../projects/ng-uikit/src/lib/ng-uikit.module';
import {CarouselModule} from '../../projects/ng-uikit/src/lib/carousel/carousel.module';
import {CarouselComponent} from './carousel/carousel.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgUikitModule,
    CarouselModule,
    RouterModule.forRoot([
      {path: 'Carousel', component: CarouselComponent}
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
