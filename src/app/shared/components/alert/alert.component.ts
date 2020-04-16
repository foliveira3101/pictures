import { Component, OnInit, Input } from '@angular/core'

import { Alert, AlerType } from './alert'
import { ALertService } from './alert.service'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'  
})
export class AlertComponent {

  @Input() timeout: number = 3000
  alerts: Alert[] = []
    
  constructor(private alertService: ALertService) {
      this.alertService
          .getAlert()
          .subscribe(alert => {
              if(!alert) {
                  this.alerts = []
                  return
              }
              this.alerts.push(alert)
              setTimeout(()=> this.removeAlert(alert), this.timeout)
          })
  }

  removeAlert(alertToRemove: Alert) {
      this.alerts = this.alerts.filter(alert => alert != alertToRemove)
  }

  getAlertClass(alert: Alert){
      if(!alert) return ''

      switch (alert.alertType){
        
        case AlerType.DANGER:
          return 'alert alert-danger'
        case AlerType.INFO:
          return 'alert alert-info'
        case AlerType.WARNING:
          return 'alert alert-warning'
        case AlerType.SUCCESS:
          return 'alert alert-success'

      }
  }

}
