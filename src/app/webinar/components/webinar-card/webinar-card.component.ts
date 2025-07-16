import { Component, Input } from '@angular/core';
import { Webinar } from '../../types/webinar-type';

@Component({
  selector: 'app-webinar-card',
  templateUrl: './webinar-card.component.html',
  styleUrls: ['./webinar-card.component.scss'],
})
export class WebinarCardComponent {
  @Input() webinarData!: Webinar;
}
