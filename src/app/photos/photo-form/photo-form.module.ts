import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module'
import { PhotoModule } from '../photo/photo.module'
import { ImmediateClickModule } from '../../shared/directives/immediate-click/immediate-click.module'

import { PhotoFormComponent } from './photo-form.component'

@NgModule({
    declarations: [ PhotoFormComponent ],
    imports:  [ 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule, 
        RouterModule,
        VMessageModule,
        PhotoModule,
        ImmediateClickModule
    ]
})
export class PhotoFormModule { }