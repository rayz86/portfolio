import { Component } from '@angular/core';
import { Card } from "../../components/card/card";
import { Reveal } from "../../directives/reveal";

@Component({
  selector: 'app-projects',
  imports: [Card, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      image: "wahcabs_port.webp",
      title: "Wah Cabs - Cab Booking Platform",
      description: "A reliable cab and coach booking website with an admin panel to manage prices, bookings, vehicle availability etc with a tracker panel to handle bookings.",
      buttonUrl: "https://www.wahcabs.com",
    },
    {
      image: "wahcruise_port.webp",
      title: "Wah Cruises - Cruise Booking Platform",
      description: "A cruise and yacht booking website with a dynamic form to book ticketed cruises. Allows selection of inclusion like food, drinks, and other amenities.",
      buttonUrl: "https://wahcruises.vercel.app",
    },
    {
      image: "proline_port.webp",
      title: "Proline Interior - Interior Design Company",
      description: "An interior design company website showcasing their projects and services. Designed to attract potential clients and provide company information.",
      buttonUrl: "https://www.prolineinterior.com",
    },
    {
      image: "mahajan_port.webp",
      title: "Mahajan Connect - Members Management",
      description: "A membership management system for religious institutions to manage member details, ancestral history and fees tracking. Includes a fees panel for reporting.",
      buttonUrl: "",
    }
  ]
}
