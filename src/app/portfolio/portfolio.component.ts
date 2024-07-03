import { Component } from '@angular/core';
import {PORTFOLIO} from '../portfolio/portfolio';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolio = PORTFOLIO;
}
