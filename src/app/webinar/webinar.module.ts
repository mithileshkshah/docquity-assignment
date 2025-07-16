import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebinarRoutingModule } from './webinar-routing.module';
import { HomeComponent } from './components/home/home.component';
import { WebinarListComponent } from './components/webinar-list/webinar-list.component';
import { WebinarCardComponent } from './components/webinar-card/webinar-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    HomeComponent,
    WebinarListComponent,
    WebinarCardComponent,
    SidebarComponent,
    TabsComponent,
  ],
  imports: [CommonModule, WebinarRoutingModule],
})
export class WebinarModule {}
