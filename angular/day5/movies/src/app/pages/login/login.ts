import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  loginForm: FormGroup;
  isSubmitted = signal(false);
  errorMessage = signal<string | null>(null);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    this.isSubmitted.set(true);
    this.errorMessage.set(null);

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      try {
        await this.authService.login(email, password);
      } catch (error: any) {
        if (error.code === 'auth/invalid-credential') {
          this.errorMessage.set('Invalid email or password.');
        } else if (error.code === 'auth/too-many-requests') {
          this.errorMessage.set('Too many failed attempts. Try again later.');
        } else {
          this.errorMessage.set('An error occurred. Please try again.');
        }
      }
    }
  }
}
