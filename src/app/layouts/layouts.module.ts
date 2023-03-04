import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { GoToTopButtonComponent } from './components/go-to-top-button/go-to-top-button.component';
import { PersonalComponent } from './personal/personal.component';
import { GeneralComponent } from './general/general.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    GoToTopButtonComponent,
    PersonalComponent,
    GeneralComponent
  ],
  imports: [
    SharedModule,
    RouterModule

  ]
})
export class LayoutsModule { }
