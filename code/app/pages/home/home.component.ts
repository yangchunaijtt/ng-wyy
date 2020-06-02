import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { SingerService } from 'src/app/services/singer.service';
import { Banner, SongSheet, Singer } from 'src/app/services/data-types/common.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners: Banner[];
  SongSheetList: SongSheet[];
  singerList: Singer[];
  constructor(private homeService: HomeService,private singerService :SingerService) {
    this.getBannersList();
    this.getPerosonalSheetList();
    this.getSingerList();
  }
  private getBannersList() {
    this.homeService.getBanners().subscribe(banners => {
      this.banners = banners;
    })
  };

  // 获取推荐歌曲
  private getPerosonalSheetList() {
    this.homeService.getPerosonalSheetList().subscribe(SongSheetList => {
      this.SongSheetList = SongSheetList;
    })
  };
  // 获取歌手
  private getSingerList() {
    this.singerService.getSinger().subscribe(Singer => {
      this.singerList = Singer;
      console.log(11,Singer);
    })
  }
  ngOnInit(): void {
  };
}
