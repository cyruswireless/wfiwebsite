import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AwardsComponent } from './components/awards/awards.component';
import { LandingComponent } from './components/landing/landing.component';
import { DesignComponent } from './components/services/design/design.component';
import { StoriesComponent } from './components/stories/stories.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: LandingComponent },
    { path: 'about', component: AboutComponent },
    { path: 'about/stories', component: StoriesComponent },
    { path: 'about/awards', component: AwardsComponent },
    { path: 'services/design', component: DesignComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}