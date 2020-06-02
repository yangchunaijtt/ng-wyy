import { Injectable, Inject } from '@angular/core';
import { Singer } from './data-types/common.types';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from "rxjs/internal/operators"
import { API_CONFIG } from './services.module';
import queryString from "query-string"

type SingerParams = {
  offset: number;
  limit: number;
  cat?: string;
}

const defaultParams: SingerParams = {
  offset: 0,
  limit: 9,
  cat: "5001",
}

@Injectable({
  providedIn: 'root'
})
export class SingerService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private url: string) { }
  /**获取推荐歌手 */
  getSinger(args: SingerParams = defaultParams): Observable<Singer[]> {
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get(`${this.url}artist/list`, { params })
      .pipe(map((res: { artists: Singer[] }) => res.artists
      ))
  };
}
