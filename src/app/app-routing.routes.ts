import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LandingComponent } from './components/landing/landing.component';
import { DesignComponent } from './components/services/design/design.component';
import { OperationComponent } from './components/services/operation/operation.component';
import { PlanningComponent } from './components/services/planning/planning.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: LandingComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services/design', component: DesignComponent },
    { path: 'services/planning', component: PlanningComponent },
    { path: 'services/operation', component: OperationComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}