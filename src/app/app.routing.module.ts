import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NgModule } from '@angular/core';
import { DatabaseButtonComponent } from './database-button/database-button.component';

const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'database-btn', component: DatabaseButtonComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
