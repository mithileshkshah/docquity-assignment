import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TabsType } from '../../enums/tabs-type.enum';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  selectedTab: string = TabsType.FOR_YOU;

  @Output() activeTab: EventEmitter<string> = new EventEmitter<string>();

  tabsType = TabsType;

  ngOnInit(): void {
    this.selectTab(TabsType.FOR_YOU);
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.activeTab.emit(tab);
  }
}
