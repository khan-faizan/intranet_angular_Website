import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OperationsComponent } from './pages/operations/operations.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { ITComponent } from './pages/it/it.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { HrComponent } from './pages/hr/hr.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'hr',component:HrComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'about',component:AboutComponent},
  {path:'it',component:ITComponent},
  {path:'marketing',component:MarketingComponent},
  {path:'operations',component:OperationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
