import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PhotoModule } from '../photo/photo.module'
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module'
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module'

import { PhotoDetailsComponent } from './photo-details.component'
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component'

import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive'



@NgModule({
    declarations: [ 
        PhotoDetailsComponent, 
        PhotoCommentsComponent,
        PhotoOwnerOnlyDirective
    ],
    exports: [ 
        PhotoDetailsComponent,
        PhotoCommentsComponent
    ],
    imports: [ 
        CommonModule,
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule,
        ShowIfLoggedModule
    ]    
})
export class PhotoDetailsModule { }