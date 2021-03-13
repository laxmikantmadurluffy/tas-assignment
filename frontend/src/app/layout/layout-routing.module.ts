import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { PatientComponent } from './patient/patient.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '',   component: PatientComponent},
        ]
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
