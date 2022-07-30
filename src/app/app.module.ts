import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AwardsComponent } from './components/awards/awards.component';
import { LandingComponent } from './components/landing/landing.component';
import { DesignComponent } from './components/services/design/design.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SlideComponent } from './components/slide/slide.component';
import { OpticalFiberComponent } from './components/optical-fiber/optical-fiber.component';
import { StoriesComponent } from './components/stories/stories.component';
import { PlanningComponent } from './components/services/planning/planning.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    SlideComponent,
    LandingComponent,
    DesignComponent,
    StoriesComponent,
    AwardsComponent,
    PlanningComponent,
    DesignComponent,
    OpticalFiberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      defaultLanguage: 'es',
    })
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}