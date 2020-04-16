import { Router, NavigationStart } from '@angular/router'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { Alert, AlerType } from './alert'


@Injectable({
    providedIn: 'root'
})
export class ALertService {     

    alertSubject: Subject<Alert> = new Subject<Alert>()
    keepAfterRouteChange: boolean = false

    constructor(router: Router) {
        router.events.subscribe(event => {
            if(event instanceof NavigationStart){
               if(this.keepAfterRouteChange){
                   this.keepAfterRouteChange = false
               } else {
                   this.clear()
               }
            }
        })
    }

    success(message: string, keepAfterRouteChange: boolean = false){
        this.alert(AlerType.SUCCESS, message, keepAfterRouteChange )
    }

    warning(message: string, keepAfterRouteChange: boolean = false){
        this.alert(AlerType.WARNING, message, keepAfterRouteChange)
    }

    danger(message: string, keepAfterRouteChange: boolean = false){
        this.alert(AlerType.DANGER, message, keepAfterRouteChange)
    }

    info(message: string, keepAfterRouteChange: boolean = false){
        this.alert(AlerType.INFO, message, keepAfterRouteChange)
    }

    private alert(alertType: AlerType, message: string, keepAfterRouteChange: boolean) {
        this.keepAfterRouteChange = keepAfterRouteChange
        this.alertSubject.next(new Alert(alertType, message))
    }

    getAlert() {
        return this.alertSubject.asObservable()
    }

    clear() {
        this.alertSubject.next(null)
    }

}