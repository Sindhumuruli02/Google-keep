import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service/user-service.service';
import { error } from 'winston';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  redirectToRegister() {
    this.route.navigate(['./register']);
  }

  get loginControl() {
    return this.loginForm.controls;
  }
  handleLogin() {
    // console.log("inside handleLogin");
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    console.log(email, password);
    this.userService.loginApiCall({ email, password }).subscribe({
      next: (res: any) => {
        const { id } = res;
        console.log('response', id);

        localStorage.setItem('access_token', id);
        this.route.navigate(['./dashboard/notes']);
      },
      error:(err)=>{
        console.log('response', err);
      },
    });
  }
}