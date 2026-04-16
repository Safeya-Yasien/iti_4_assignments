import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  testimonials = [
    { text: 'The best platform to discover hidden cinematic gems!', user: 'Ahmed Ali' },
    { text: 'Detailed info and amazing UI. Highly recommended.', user: 'Sarah John' },
    { text: 'I love how fast the search and filtering works.', user: 'Mona Samy' },
  ];
}
