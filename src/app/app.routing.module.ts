import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { SkicamsComponent } from './containers/skicams/skicams.component';
import { ContactComponent } from './containers/contact/contact.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'about-us',
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'skicams',
    component: SkicamsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
