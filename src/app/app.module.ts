import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ItsasecrettoeverybodyComponent } from './components/itsasecrettoeverybody/itsasecrettoeverybody.component';
import { NothingtoseehereComponent } from './components/nothingtoseehere/nothingtoseehere.component';
import { RainbowComponent } from './components/rainbow/rainbow.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ItsasecrettoeverybodyComponent,
    NothingtoseehereComponent,
    RainbowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
