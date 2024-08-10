import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { FindjobsComponent } from './findjobs/findjobs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {component:HomeComponent,path:''},
  {component:ContactComponent,path:'contact'},
  {component:CareerComponent,path:'career'},
  { component: FindjobsComponent, path: 'findjobs' },
  { path: '', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true,scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
