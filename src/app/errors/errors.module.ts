import { NgModule, ErrorHandler } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NotFoundComponent } from './not-found/not-found.component'
import { GlobalErrorHaldler } from './global-error-handler/global-error-handler';
import { GlobalErrorComponent } from './global-error/global-error.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ 
    NotFoundComponent, 
    GlobalErrorComponent 
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [ 
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHaldler
    }
  ]
})
export class ErrorsModule { }
