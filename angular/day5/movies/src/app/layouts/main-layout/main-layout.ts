import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Footer, Navbar],

  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
