import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  specialties: string[] = [
    'Accupuncture',
    'Allergy and Immunology',
    'Anaesthesiology',
    'Clinical Nutrition',
    'General Practitioner',
  ];

  otherSections: string[] = ['Topics', 'Speakers', 'Pharma & associations'];
}
