import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/models/announcements.model';
import { APLTeams } from 'src/app/models/aplteams.model';
import { QuickLink } from 'src/app/models/quicklinks.model';
import { Trending } from 'src/app/models/trendings.model';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { APLTeamService } from 'src/app/services/aplteams.service';
import { QuickLinkService } from 'src/app/services/quicklink.service';
import { TrendingService } from 'src/app/services/trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:AnnouncementService,
    private aplService:APLTeamService,
    private trendingService:TrendingService,
    private quickLinkService:QuickLinkService) { }
  announcements?: Announcement[];
  currentAnnouncement: Announcement = {};

  aplTeams?: APLTeams[];
  currentAplTeams: APLTeams = {};

  trendings?: Trending[];
  currentTrending: Trending = {};

  quickLinks?: QuickLink[];
  currentQuickLink: QuickLink = {};

  ngOnInit(): void {
    this.service.getAll()
    .subscribe((data)=>{
      this.announcements = data;
    });
    this.aplService.getAll()
    .subscribe((data)=>{
      this.aplTeams = data;
    });

    this.trendingService.getAll()
    .subscribe((data)=>{
      this.trendings = data;
    });

    this.quickLinkService.getAll()
    .subscribe((data)=>{
      this.quickLinks = data;
    });
  }

  retrieveAnnouncements(): void {
    this.service.getAll()
    .subscribe((data)=>{
      this.announcements = data;
    });
  }


}
