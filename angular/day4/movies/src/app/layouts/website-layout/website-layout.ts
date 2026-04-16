import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-website-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="min-h-screen pt-20 px-4 container mx-auto">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [],
})
export class WebsiteLayout {}
