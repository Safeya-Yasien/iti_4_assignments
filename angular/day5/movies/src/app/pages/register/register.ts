import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  registerForm: FormGroup;
  isSubmitted = signal(false);
  errorMessage = signal<string | null>(null);

  constructor() {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: this.passwordMatchValidator,
      },
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  async onSubmit() {
    this.isSubmitted.set(true);
    this.errorMessage.set(null);
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;

      try {
        await this.authService.register(email, password);
      } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
          this.errorMessage.set('This email is already registered.');
        } else {
          this.errorMessage.set('An error occurred during registration.');
        }
      }
    }
  }
}
