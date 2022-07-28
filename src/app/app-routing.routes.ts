import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/home/landing/landing.component';
import { DesignComponent } from './components/services/design/design.component';
import { DeploymentComponent } from './components/services/deployment/deployment.component';
import { OperationComponent } from './components/services/operation/operation.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: LandingComponent },
    { path: 'services/design', component: DesignComponent },
    { path: 'services/operation', component: OperationComponent },
    { path: 'services/deployment', component: DeploymentComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}