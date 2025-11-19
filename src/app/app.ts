import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { RollBanner } from "./sections/roll-banner/roll-banner";
import { About } from "./sections/about/about";
import { Projects } from "./sections/projects/projects";
import { Experience } from "./sections/experience/experience";
import { Contact } from "./sections/contact/contact";

@Component({
  selector: 'app-root',
  imports: [Hero, RollBanner, About, Projects, Experience, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
}
