import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainSectionComponent } from './components/home/main-section/main-section.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
