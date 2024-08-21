import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service/user-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }

  redirectToLogin() {
    this.route.navigate(['']);
  }
  get registerControl() {
    return this.registerForm.controls;
  }

  handleRegister() {
    // console.log("inside handleRegister");
    if (this.registerForm.invalid) return;

    const { firstName, lastName, userName, password } = this.registerForm.value;
    const registerObj = {
      firstName: firstName,
      lastName: lastName,
      service: 'advance',
      email: userName,
      password: password,
    };
    console.log(registerObj);
    this.userService.registerApiCall(registerObj).subscribe({
      next: (res) => {
        console.log('response', res);
        this.route.navigate(['']);
      },
      error: (err) => {
        console.log('response', err);
      },
    });
  }
}