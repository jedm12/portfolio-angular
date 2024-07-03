import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { NgFor } from '@angular/common';
import {SKILLS} from '../home/skills';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ContactComponent, PortfolioComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  skills = SKILLS;
}
