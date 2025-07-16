import { Component, Input } from '@angular/core';
import { Webinar } from '../../types/webinar-type';
import { TabsType } from '../../enums/tabs-type.enum';
import { WebinarService } from '../../services/webinar.service';

@Component({
  selector: 'app-webinar-list',
  templateUrl: './webinar-list.component.html',
  styleUrls: ['./webinar-list.component.scss'],
})
export class WebinarListComponent {
  @Input() activeTab: string = TabsType.FOR_YOU; // Default tab
  webinars: Webinar[] = [];

  constructor(private webinarService: WebinarService) {}

  ngOnChanges(): void {
    this.loadWebinars();
  }

  loadWebinars() {
    switch (this.activeTab) {
      case 'live':
        this.webinarService
          .getLive()
          .subscribe((data) => (this.webinars = data));
        break;
      case 'upcoming':
        this.webinarService
          .getUpcoming()
          .subscribe((data) => (this.webinars = data));
        break;
      default:
        this.webinarService
          .getForYou()
          .subscribe((data) => (this.webinars = data));
        break;
    }
  }
  // webinars: Webinar[] = [
  // {
  //   organization: 'PDGI Indonesia',
  //   sponsoredBy: 'Sponsored by Roche',
  //   followers: 1000,
  //   timeAgo: '30 min ago',
  //   orgLogo: 'assets/org-logo.png',
  //   bannerUrl: 'assets/webinar-banner.jpg',
  //   credits: '1.5 Credits',
  //   expiresIn: '12 days',
  //   title:
  //     'New Perspectives in The Covid19 Management of Parox Health caretine',
  //   liveDate: '7 Jan 2025, 12:30 PM',
  //   keyHighlight: 'Manage chronic and complex diseases',
  //   likes: 20,
  //   comments: 12,
  //   watching: 824,
  // },
  // {
  //   organization: 'HealthPlus Network',
  //   sponsoredBy: 'Sponsored by MedTech',
  //   followers: 2000,
  //   timeAgo: '1 hr ago',
  //   orgLogo: 'assets/healthplus-logo.png',
  //   bannerUrl: 'assets/webinar2.jpg',
  //   credits: '2.0 Credits',
  //   expiresIn: '10 days',
  //   title: 'Advances in AI Applications for Diagnostics in Clinical Practice',
  //   liveDate: '9 Jan 2025, 10:00 AM',
  //   keyHighlight: 'AI-based screening tools and case studies',
  //   likes: 45,
  //   comments: 18,
  //   watching: 1200,
  // },
  // {
  //   organization: 'MedLearn Academy',
  //   sponsoredBy: 'Sponsored by Glaxo',
  //   followers: 3000,
  //   timeAgo: '2 hrs ago',
  //   orgLogo: 'assets/medlearn-logo.png',
  //   bannerUrl: 'assets/webinar3.jpg',
  //   credits: '1.0 Credit',
  //   expiresIn: '8 days',
  //   title:
  //     'Optimizing Heart Health through Nutrition and Lifestyle Strategies',
  //   liveDate: '12 Jan 2025, 3:00 PM',
  //   keyHighlight: 'Cardiology-focused lifestyle interventions',
  //   likes: 38,
  //   comments: 15,
  //   watching: 980,
  // },
  // {
  //   organization: 'NeuroCare Global',
  //   sponsoredBy: 'Sponsored by BrainTech',
  //   followers: 4000,
  //   timeAgo: '5 hrs ago',
  //   orgLogo: 'assets/neurocare-logo.png',
  //   bannerUrl: 'assets/webinar4.jpg',
  //   credits: '2.5 Credits',
  //   expiresIn: '14 days',
  //   title: 'Innovations in Neurology for Managing Cognitive Health Disorders',
  //   liveDate: '14 Jan 2025, 11:00 AM',
  //   keyHighlight: 'New frontiers in neurodegenerative therapy',
  //   likes: 52,
  //   comments: 21,
  //   watching: 1500,
  // },
  // {
  //   organization: 'OncoConnect',
  //   sponsoredBy: 'Sponsored by OncoPharma',
  //   followers: 5000,
  //   timeAgo: '6 hrs ago',
  //   orgLogo: 'assets/oncoconnect-logo.png',
  //   bannerUrl: 'assets/webinar5.jpg',
  //   credits: '1.2 Credits',
  //   expiresIn: '7 days',
  //   title:
  //     'Breakthrough Approaches in Cancer Immunotherapy and Targeted Care',
  //   liveDate: '15 Jan 2025, 2:00 PM',
  //   keyHighlight: 'Targeted therapy case insights',
  //   likes: 63,
  //   comments: 17,
  //   watching: 1324,
  // },
  // ];
}
