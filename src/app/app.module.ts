import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/home/about/about.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SlideComponent } from './components/shared/slide/slide.component';
import { DesignComponent } from './components/services/design/design.component';
import { ServicesComponent } from './components/home/services/services.component';
import { PlanningComponent } from './components/services/planning/planning.component';
import { DeploymentComponent } from './components/services/deployment/deployment.component';
import { OperationComponent } from './components/services/operation/operation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    SlideComponent,
    LandingComponent,
    DesignComponent,
    ServicesComponent,
    PlanningComponent,
    DeploymentComponent,
    OperationComponent
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