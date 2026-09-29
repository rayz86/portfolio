import { Component } from '@angular/core';
import { Github, Instagram, Linkedin, LucideAngularModule, Mail, Phone } from 'lucide-angular';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule, Reveal],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;

  email = 'rayyan3886@gmail.com';
  phone = '+91 73872 83828';
  phoneHref = 'tel:' + this.phone.replace(/\s/g, '');
  year = new Date().getFullYear();

  socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rayyan-shaikh-41287a232/', icon: Linkedin },
    { label: 'GitHub', href: 'https://www.github.com/rayz86', icon: Github },
    { label: 'Instagram', href: 'https://www.instagram.com/rayyan.86', icon: Instagram },
  ];
}
