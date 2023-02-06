import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CmeViewApprenantsComponent } from './views/cme-view-apprenants/cme-view-apprenants.component';
import { ApprenantCardComponent } from './components/apprenants/apprenant-card/apprenant-card.component';
import { CorsInterceptorInterceptor } from './interceptors/cors-interceptor.interceptor';
import { RouterModule, Routes } from '@angular/router';
//Set up the router
const appRouter: Routes = [
  {path:'apprenants',component:CmeViewApprenantsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CmeViewApprenantsComponent,
    ApprenantCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
