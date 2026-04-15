import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  // بنحتاج RouterLink و RouterLinkActive عشان الـ Sidebar
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex h-screen bg-gray-100">
      <aside class="w-64 bg-slate-900 text-white flex flex-col p-6 shadow-xl">
        <h1 class="text-2xl font-bold mb-10 text-blue-400 tracking-tight">Admin Portal</h1>

        <nav class="flex-1 space-y-2">
          <a
            routerLink="/admin"
            routerLinkActive="bg-slate-800 border-l-4 border-blue-500"
            [routerLinkActiveOptions]="{ exact: true }"
            class="block p-3 hover:bg-slate-800 rounded transition-all"
          >
            Dashboard Stats
          </a>
          <a
            routerLink="/admin/manage"
            routerLinkActive="bg-slate-800 border-l-4 border-blue-500"
            class="block p-3 hover:bg-slate-800 rounded transition-all"
          >
            Manage Movies
          </a>
        </nav>

        <div class="mt-auto border-t border-slate-700 pt-4">
          <a
            routerLink="/"
            class="flex items-center gap-2 text-red-400 hover:text-red-300 transition"
          >
            <span>←</span> Back to Website
          </a>
        </div>
      </aside>
    </div>
  `,
  styles: [],
})
export class DashboardLayout {}
