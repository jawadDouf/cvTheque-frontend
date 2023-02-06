import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { CorsInterceptorInterceptor } from './interceptors/cors-interceptor.interceptor';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { CvComponent } from './components/apprenants/cv/cv.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CmeViewApprenantsComponent } from './views/cme-view-apprenants/cme-view-apprenants.component';
import { ApprenantCardComponent } from './components/apprenants/apprenant-card/apprenant-card.component';
//Set up the router
const appRouter: Routes = [
  {path:'apprenants',component:CmeViewApprenantsComponent},
  {path:'apprenants/cv/:id',component:CvComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CmeViewApprenantsComponent,
    ApprenantCardComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptorInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
