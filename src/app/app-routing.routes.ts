import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LandingComponent } from './components/landing/landing.component';
import { StoriesComponent } from './components/stories/stories.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: LandingComponent },
    { path: 'about', component: AboutComponent },
    { path: 'about/stories', component: StoriesComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}