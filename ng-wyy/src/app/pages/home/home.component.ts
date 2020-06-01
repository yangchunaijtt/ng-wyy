import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Banner, PlayTags, PlayList } from 'src/app/services/data-types/common.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners: Banner[];
  tags: PlayTags[];
  playData: PlayList[];
  constructor(private homeService: HomeService) {
    this.getBanners();
    this.getTags();
    this.getPlayLists();
  }
  private getBanners() {
    this.homeService.getBanners().subscribe(banners => {
      this.banners = banners;
    })
  };
  private getTags() {
    this.homeService.getPlayTags().subscribe(tags => {
      this.tags = tags;
      console.log(this.tags)
    })
  };
  private getPlayLists() {
    this.homeService.getPersonalized().subscribe(playData => {
      this.playData = playData;
      console.log(11, this.playData);
    })
  }
  ngOnInit(): void {
  }

}
