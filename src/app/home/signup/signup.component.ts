import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator'
import { UserNotTakenValidatorService } from './user-not-taken.validator.service'
import { NewUser } from './new-user'
import { SignUpService } from './signup.service'
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service'

import { userNamePassword } from './username-password.validator'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  providers: [ UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit, AfterViewInit {

  signupForm: FormGroup
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>


  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) { }

  ngOnInit(): void {
    

    this.signupForm = this.formBuilder.group({
      email: ['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['', 
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['', 
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],      
      password: ['', 
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    }, {
      validators: userNamePassword
    })
  }

  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() && 
      this.emailInput.nativeElement.focus()
  }

  signup(): void {

    if(this.signupForm.valid && !this.signupForm.pending) {
      
      const newUser = this.signupForm.getRawValue() as NewUser      
      this.signUpService
        .signup(newUser)
        .subscribe(
          () =>  this.router.navigate(['']),
          err => console.log(err)
        )
    }
    
  }

}
