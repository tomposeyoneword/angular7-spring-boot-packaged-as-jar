import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress'; //https://github.com/bootsoon/ng-circle-progress
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, SPINNER } from 'ngx-ui-loader';

// Application Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelloComponent } from './hello/hello.component';
import { TrustScoreComponent } from './trust-score/trust-score.component';
import { IdentityVerificationComponent } from './identity-verification/identity-verification.component';

@NgModule( {
    declarations: [
        AppComponent,
        HelloComponent,
        TrustScoreComponent,
        DashboardComponent,
        IdentityVerificationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgxUiLoaderModule,
        NgxUiLoaderHttpModule.forRoot( { showForeground: true } ),
        NgCircleProgressModule.forRoot( {
            title: "0", 
            titleFontWeight: "700",
            radius: 75,
            outerStrokeWidth: 16,
            innerStrokeWidth: 5,
            innerStrokeColor: "black",
            outerStrokeGradient: true,
            outerStrokeGradientStopColor: "#FFFFFF",
            showZeroOuterStroke: true,
            startFromZero: true,
            outerStrokeLinecap: "round",
            animation: true,
            animateTitle: true,
            animationDuration: 300,
            clockwise: false,
            showSubtitle: true,
            subtitle: "Trust Score",
            showUnits: false,
            showTitle: true,
            maxPercent: 100,
        } )
    ],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule { }
