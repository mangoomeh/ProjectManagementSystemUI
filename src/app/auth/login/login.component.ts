import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isValidated: boolean = false;
  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  login() {
    if (!this.loginForm.valid) {
      alert('invalid email / password')
      return;
    }
    this.auth.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['pms']);
      },
      error: (err) => {
        console.log(err);
        alert('something went wrong');
      },
    });
  }
}
