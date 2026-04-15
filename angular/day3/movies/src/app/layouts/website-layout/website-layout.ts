import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-website-layout',
  standalone: true,
  // بنضيف الـ Imports اللي الـ HTML محتاجها
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <app-navbar></app-navbar>
    
    <main class="min-h-screen pt-20 px-4 container mx-auto">
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `,
  styles: []
})
export class WebsiteLayout {}