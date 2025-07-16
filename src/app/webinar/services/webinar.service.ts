import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Webinar } from '../types/webinar-type';

@Injectable({
  providedIn: 'root',
})
export class WebinarService {
  private forYouWebinars: Webinar[] = [
    {
      organization: 'PDGI Indonesia',
      sponsoredBy: 'Sponsored by Roche',
      followers: 1000,
      timeAgo: '30 min ago',
      orgLogo: 'assets/org-logo.png',
      bannerUrl: 'assets/webinar-banner.jpg',
      credits: '1.5 Credits',
      expiresIn: '12 days',
      title:
        'New Perspectives in The Covid19 Management of Parox Health caretine',
      liveDate: '7 Jan 2025, 12:30 PM',
      keyHighlight: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      watching: 824,
    },
    {
      organization: 'HealthPlus Network',
      sponsoredBy: 'Sponsored by MedTech',
      followers: 2000,
      timeAgo: '1 hr ago',
      orgLogo: 'assets/healthplus-logo.png',
      bannerUrl: 'assets/webinar2.jpg',
      credits: '2.0 Credits',
      expiresIn: '10 days',
      title: 'Advances in AI Applications for Diagnostics in Clinical Practice',
      liveDate: '9 Jan 2025, 10:00 AM',
      keyHighlight: 'AI-based screening tools and case studies',
      likes: 45,
      comments: 18,
      watching: 1200,
    },
  ];

  private liveWebinars: Webinar[] = [
    {
      organization: 'MedLive Now',
      sponsoredBy: 'Sponsored by CureTech',
      followers: 500,
      timeAgo: 'Live now',
      orgLogo: 'assets/live-org.png',
      bannerUrl: 'assets/live-webinar.jpg',
      credits: '1.0 Credit',
      expiresIn: 'Today',
      title:
        'Emergency Response Techniques in the ER: Live Simulation Training',
      liveDate: 'Today, 11:00 AM',
      keyHighlight: 'Interactive simulation for ER preparedness',
      likes: 80,
      comments: 25,
      watching: 2200,
    },
    {
      organization: 'OncoConnect',
      sponsoredBy: 'Sponsored by OncoPharma',
      followers: 5000,
      timeAgo: '6 hrs ago',
      orgLogo: 'assets/oncoconnect-logo.png',
      bannerUrl: 'assets/webinar5.jpg',
      credits: '1.2 Credits',
      expiresIn: '7 days',
      title:
        'Breakthrough Approaches in Cancer Immunotherapy and Targeted Care',
      liveDate: '15 Jan 2025, 2:00 PM',
      keyHighlight: 'Targeted therapy case insights',
      likes: 63,
      comments: 17,
      watching: 1324,
    },
  ];

  private upcomingWebinars: Webinar[] = [
    {
      organization: 'OncoConnect',
      sponsoredBy: 'Sponsored by OncoPharma',
      followers: 800,
      timeAgo: '6 hrs ago',
      orgLogo: 'assets/oncoconnect-logo.png',
      bannerUrl: 'assets/webinar5.jpg',
      credits: '1.2 Credits',
      expiresIn: '7 days',
      title:
        'Breakthrough Approaches in Cancer Immunotherapy and Targeted Care',
      liveDate: '15 Jan 2025, 2:00 PM',
      keyHighlight: 'Targeted therapy case insights',
      likes: 63,
      comments: 17,
      watching: 1324,
    },
    {
      organization: 'NeuroCare Global',
      sponsoredBy: 'Sponsored by BrainTech',
      followers: 1500,
      timeAgo: '5 hrs ago',
      orgLogo: 'assets/neurocare-logo.png',
      bannerUrl: 'assets/webinar4.jpg',
      credits: '2.5 Credits',
      expiresIn: '14 days',
      title: 'Innovations in Neurology for Managing Cognitive Health Disorders',
      liveDate: '14 Jan 2025, 11:00 AM',
      keyHighlight: 'New frontiers in neurodegenerative therapy',
      likes: 52,
      comments: 21,
      watching: 1500,
    },
  ];

  constructor() {}

  getForYou(): Observable<Webinar[]> {
    return of(this.forYouWebinars);
  }

  getLive(): Observable<Webinar[]> {
    return of(this.liveWebinars);
  }

  getUpcoming(): Observable<Webinar[]> {
    return of(this.upcomingWebinars);
  }
}
