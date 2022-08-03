import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/sections/about/about.component';
import { AwardsComponent } from './components/sections/awards/awards.component';
import { DeploymentComponent } from './components/sections/deployment/deployment.component';
import { OperationComponent } from './components/sections/operation/operation.component';
import { DesignComponent } from './components/sections/design/design.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SlideComponent } from './components/sections/slide/slide.component';
import { OpticalFiberComponent } from './components/sections/optical-fiber/optical-fiber.component';
import { StoriesComponent } from './components/sections/stories/stories.component';
import { PlanningComponent } from './components/sections/planning/planning.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { TelecomComponent } from './components/sections/telecom/telecom.component';
import { CivilWorkComponent } from './components/sections/civil-work/civil-work.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    SlideComponent,
    DesignComponent,
    PlanningComponent,
    OperationComponent,
    StoriesComponent,
    AwardsComponent,
    OpticalFiberComponent,
    DeploymentComponent,
    HomeComponent,
    ContactComponent,
    TelecomComponent,
    CivilWorkComponent
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