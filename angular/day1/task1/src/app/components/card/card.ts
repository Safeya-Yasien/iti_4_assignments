import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() userData!: User;
  checkRole() {
    alert(`This person is a: ${this.userData.role}`);
  }
}
