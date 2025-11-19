import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { LucidePhoneCall } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {}
