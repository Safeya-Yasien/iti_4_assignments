import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Testimonials } from '../../../components/testimonials/testimonials';

@Component({
  selector: 'app-about',
  imports: [CommonModule, Testimonials],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  features = [
    { title: 'Global Reach', desc: 'Covering cinema from Hollywood to indie world films.' },
    { title: 'Always Updated', desc: 'Real-time updates for latest releases and ratings.' },
    { title: 'Community Driven', desc: 'Built for movie lovers, by movie lovers.' },
  ];
}
