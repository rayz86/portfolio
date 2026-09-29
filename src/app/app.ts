import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { RollBanner } from "./sections/roll-banner/roll-banner";
import { About } from "./sections/about/about";
import { Projects } from "./sections/projects/projects";
import { Experience } from "./sections/experience/experience";
import { Contact } from "./sections/contact/contact";
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, RollBanner, About, Projects, Experience, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
}
