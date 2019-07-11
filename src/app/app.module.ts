import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../layout/header/header.component';
import { MainComponent } from '../layout/main/main.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkicamsComponent } from './components/skicams/skicams.component';
import { ApiService } from './services/api.service';
import { CardComponent } from "./components/card/card.component";
import {CamBoxComponent} from "./components/cam-box/cam-box.component";
import {ApiInterceptor} from "./services/api.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent,
    SkicamsComponent,
    CardComponent,
    CamBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
