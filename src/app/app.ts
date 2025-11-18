import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { RollBanner } from "./sections/roll-banner/roll-banner";
import { About } from "./sections/about/about";
import { Projects } from "./sections/projects/projects";

@Component({
  selector: 'app-root',
  imports: [Hero, RollBanner, About, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
