import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // Import the DashboardComponent

// Other imports and code

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Set the default route to the DashboardComponent
    { path: 'dashboard', component: DashboardComponent },
    // Add more routes for other components as needed
  ];