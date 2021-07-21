import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItsasecrettoeverybodyComponent } from './components/itsasecrettoeverybody/itsasecrettoeverybody.component';
import { NothingtoseehereComponent } from './components/nothingtoseehere/nothingtoseehere.component';
import { RainbowComponent } from './components/rainbow/rainbow.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'itsasecrettoeverybody', component: ItsasecrettoeverybodyComponent },
  { path: 'nothingtoseehere', component: NothingtoseehereComponent },
  { path: 'rainbow', component: RainbowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
