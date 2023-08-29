import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckComponent } from './check/check.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: 'home', component: CheckComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent }, // Add the About route
  { path: 'contact' , component : ContactComponent},
  { path: 'service' , component : ServiceComponent},
  { path: 'feedback', component: FeedbackComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
