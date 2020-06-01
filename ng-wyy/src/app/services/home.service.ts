import { Injectable, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from './services.module';
import { Banner, PlayTags, PlayList } from './data-types/common.types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/internal/operators"

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private url: string) { };
  getBanners(): Observable<Banner[]> {
    return this.http.get(`${this.url}banner`)
      .pipe(map((res: { banners: Banner[] }) => res.banners
      ))
  };
  getPlayTags(): Observable<PlayTags[]> {
    return this.http.get(`${this.url}playlist/hot`)
      .pipe(map((res: { tags: PlayTags[] }) => {
        return res.tags.slice(0, 4).sort((x, y) => {
          return x.position - y.position;
        })
      }
      ))
  };
  getPersonalized(): Observable<PlayList[]> {
    return this.http.get(`${this.url}personalized`)
      .pipe(map((res: { result: PlayList[] }) => {
        return res.result.slice(0, 15)
      }
      ))
  };
}
