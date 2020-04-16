import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PhotoModule } from '../photo/photo.module'
import { CardModule } from '../../shared/components/card/card.module'
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module'

import { PhotoListComponent } from './photo-list.component'
import { PhotosComponent } from './photos/photos.component'
import { LoadButtonComponent } from './load-button/load-button.component'
import { SearchComponent } from './search/search.component'

import { FilterByDescription } from './filter-by-description.pipe'



@NgModule({
    declarations: [ 
            PhotoListComponent,
            PhotosComponent,
            LoadButtonComponent,
            SearchComponent,
            FilterByDescription            
        ],
    imports:  [ 
        CommonModule, 
        PhotoModule,
        CardModule,
        DarkenOnHoverModule,
        RouterModule
    ]
})
export class PhotoListModule { }