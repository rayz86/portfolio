import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Expcard } from '../../components/expcard/expcard';

@Component({
  selector: 'app-experience',
  imports: [NgFor, Expcard],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences = [
    {
      logo: "dream.svg",
      company: "Dream Code Studio",
      position: "Full Stack Developer",
      location: "Mapusa, Goa - India",
      duration: "01 April 2025 - 30 November 2025",
      description:
        "I contributed to multiple client projects as a fullstack developer, building responsive and user-friendly interfaces using React.js, Vite, Tailwind CSS and Firebase DB. I have also worked on collaborating on UI/UX, animations, video editing and performance optimization."
    },
    {
      logo: "contractzy.svg",
      company: "Contractzy (Formerly The Legal Capsule)",
      position: "Product Developer",
      location: "Verna, Goa- India",
      duration: "01 July 2024 - 01 May 2025",
      description:
        "I developed a fully functional prototype to forecast quarterly company performance and assess financial risks. I automated data processing, implemented hybrid forecasting models (SARIMA + Prophet + XGBoost), and built a dashboard for visualizing trends and risk insights."
    },
    {
      logo: "tangentia.svg",
      company: "Tangentia India Technologies Pvt. Ltd.",
      position: "RPA & Support Intern",
      location: "Porvorim, Goa- India",
      duration: "01 July 2024 - 05 Sep 2024",
      description:
        "I supported RPA and implementation teams in daily operations by handling client calls, assigning support tickets, and escalating technical issues to L2 support. I also assisted with remote installations and configuration of automation environments for clients."
    },
  ]
}
