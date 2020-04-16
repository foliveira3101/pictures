import { NgModule } from '@angular/core'

import { PhotoListModule } from './photo-list/photo-list.module'
import { PhotoModule } from './photo/photo.module'
import { PhotoFormModule } from './photo-form/photo-form.module'
import { PhotoDetailsModule } from './photo-detail/photo-details.module'
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module'

@NgModule({ 
  imports: [         
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    DarkenOnHoverModule,
    PhotoDetailsModule
  ]
})
export class PhotosModule { }