import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  roles: any[] = [];
  signupForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required],
    roleId: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  getUserRoles() {
    this.auth.getRoles().subscribe({
      next: (res) => {
        this.roles = res;
      },
    });
  }

  signup() {
    this.auth.signup(this.signupForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['auth/login']);
      },
    });
  }

  ngOnInit(): void {
    this.getUserRoles();
  }
}
