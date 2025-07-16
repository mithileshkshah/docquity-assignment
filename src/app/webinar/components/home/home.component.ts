import { Component } from '@angular/core';
import { TabsType } from '../../enums/tabs-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  activeTab!: string;
  tabsType = TabsType;
  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
