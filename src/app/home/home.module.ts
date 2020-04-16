import { NgModule } from '@angular/core'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { VMessageModule } from '../shared/components/vmessage/vmessage.module'

import { SigninComponent } from './signin/signin.component'
import { SignupComponent } from './signup/signup.component'
import { HomeComponent } from './home.component'

import { HomeRoutingModule } from './home.routing.module'
import { SignUpService } from './signup/signup.service'

@NgModule({
  declarations: [ 
    SigninComponent, 
    SignupComponent, 
    HomeComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule
  ],
  providers: [ 
    SignUpService
  ]
})
export class HomeModule { }
