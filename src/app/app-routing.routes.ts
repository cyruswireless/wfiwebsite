import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AwardsComponent } from './components/sections/awards/awards.component';
import { OpticalFiberComponent } from './components/sections/optical-fiber/optical-fiber.component';
import { StoriesComponent } from './components/sections/stories/stories.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about/stories', component: StoriesComponent },
    { path: 'about/awards', component: AwardsComponent },
    { path: 'experience/op-fiber', component: OpticalFiberComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}