import { ErrorHandler, Injectable, Injector } from '@angular/core'
import { Router } from '@angular/router'
import { LocationStrategy, PathLocationStrategy } from '@angular/common'

import * as StackTrace from 'stacktrace-js'

import { environment } from '../../../environments/environment'

import { UserService } from '../../core/user/user.service'
import { ServerLogService } from './server-log.service'

@Injectable()
export class GlobalErrorHaldler implements ErrorHandler {
        
    constructor(private injector: Injector) { }


    handleError(error: any): void {
        console.log('I was here!')

        const location = this.injector.get(LocationStrategy)
        const userService = this.injector.get(UserService)
        const serverLogService = this.injector.get(ServerLogService)
        const router = this.injector.get(Router)
        
        const url = location instanceof PathLocationStrategy
            ? location.path()
            : '';

        const message = error.message
            ? error.message :
            error.toString();
    
        if(environment.production) router.navigate(['/error'])

        StackTrace
            .fromError(error)
            .then(stackframes => {
                const stackAsString = stackframes
                    .map(sf => sf.toString())
                    .join('\n')
                    console.log(message)                                
                    console.log(stackAsString)
                    console.log('Will be sent to server')
                    serverLogService.log({
                        message,
                        url,
                        userName: userService.getUserName(),
                        stack: stackAsString
                    }).subscribe(
                        () => console.log('Error logged on server'),
                        err => {
                            console.log(err)
                            console.log('Fail to send error log to server')
                        }
                    )

            })        
     
    }
    
}