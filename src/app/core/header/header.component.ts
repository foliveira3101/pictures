import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'

import { UserService } from '../user/user.service'
import { User } from '../user/user'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user$: Observable<User> 

  constructor(
        private userService: UserService,
        private router: Router) { 
    this.user$ = userService.getUser()
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.logout()
    this.router.navigate([''])
  }

}
