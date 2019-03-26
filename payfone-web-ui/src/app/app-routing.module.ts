import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HelloComponent } from './hello/hello.component';
import { TrustScoreComponent } from './trust-score/trust-score.component';
import { IdentityVerificationComponent } from './identity-verification/identity-verification.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'hello', component: HelloComponent },
    { path: 'trust-score', component: TrustScoreComponent },
    { path: 'identity-verification', component: IdentityVerificationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
