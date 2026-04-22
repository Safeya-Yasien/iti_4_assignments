import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  user,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  user$ = user(this.auth);

  async register(email: string, pass: string) {
    try {
      const credential = await createUserWithEmailAndPassword(this.auth, email, pass);
      this.router.navigate(['/login']);
      return credential;
    } catch (error: any) {
      console.error('Registration failed:', error.code);
      throw error;
    }
  }

  async login(email: string, pass: string) {
    try {
      const credential = await signInWithEmailAndPassword(this.auth, email, pass);
      this.router.navigate(['/']);
      return credential;
    } catch (error: any) {
      console.error('Login failed:', error.code);
      throw error;
    }
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/', 'login']);
    });
  }
}
