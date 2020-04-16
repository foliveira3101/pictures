import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { AuthService } from 'src/app/core/auth/auth.service'
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service'




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit, AfterViewInit {

  fromUrl: string
  loginForm: FormGroup
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private platformDetectorService: PlatformDetectorService,
      private activatedRoute: ActivatedRoute) { }
    
  ngOnInit(): void {
    this.activatedRoute
      .queryParams
      .subscribe(params => this.fromUrl = params.fromUrl)

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required ],
      password: ['', Validators.required ]
    })
  }

  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() && 
      this.userNameInput.nativeElement.focus()  
  }


  login(): void {

    const userName = this.loginForm.get('userName').value
    const password = this.loginForm.get('password').value

    this.authService.authenticate(userName, password)
      .subscribe(
        () => {

          this.fromUrl 
            ? this.router.navigateByUrl(this.fromUrl)
            : this.router.navigate(['user', userName])
        },
        err => {
          console.log(err)          
          this.loginForm.reset()
          this.platformDetectorService.isPlatformBrowser() && 
            this.userNameInput.nativeElement.focus()
          alert('Invalid user name or password')          
        }
      )
  }
  
}
