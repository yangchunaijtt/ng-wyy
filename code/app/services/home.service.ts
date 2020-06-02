import { Injectable, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from './services.module';
import { Banner, SongSheet } from './data-types/common.types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map } from "rxjs/internal/operators"

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http:HttpClient,@Inject(API_CONFIG) private url:string) { };
  // 获取轮播图
  getBanners():Observable<Banner[]>{
    return this.http.get(`${this.url}banner`)
    .pipe(map((res:{banners:Banner[]}) => res.banners
    ))
  };
  
  /**获取推荐歌单，默认是30个歌曲 */
  getPerosonalSheetList():Observable<SongSheet[]>{
    return this.http.get(`${this.url}personalized`)
    .pipe(map((res:{result:SongSheet[]}) => res.result
    ))
  };
}
