import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PatientComponent } from './patient/patient.component';
import { LayoutComponent } from './layout.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        PatientComponent],

    imports: [
        CommonModule,
        LayoutRoutingModule,

    ],
    providers: [],
    bootstrap: []
})
export class LayoutModule { }
