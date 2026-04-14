import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { User } from './models/user.model';
import { Card } from './components/card/card';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, Card, Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('task1');
  users: User[] = [
    { id: 1, name: 'Mostafa', role: 'admin', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Ahmed', role: 'user', image: 'https://via.placeholder.com/150' },
  ];
}
