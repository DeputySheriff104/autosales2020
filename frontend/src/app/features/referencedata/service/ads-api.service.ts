import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelModel, ModelToCreateOrUpdateModel} from '../model/model.model';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {AdModel, AdToCreateOrUpdateModel} from '../model/ad.model';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class AdsApiService {

  constructor(private readonly http: HttpClient) {}

  createAd(ad: AdToCreateOrUpdateModel): Observable<AdModel> {
    return this.http.post<AdModel>(`${environment.api}/ads`, ad);
  }

  getAllAds(): Observable<AdModel[]> {
    return this.http.get<AdModel[]>(`${environment.api}/ads`);
  }

  getAllAdsFiltered(search: string): Observable<AdModel[]> {
    return this.http.get<AdModel[]>(`${environment.api}/ads${search}`);
  }

  getStatistics(): Observable<AdModel[]> {
    return this.http.get<AdModel[]>(`${environment.api}/ads/statistics`);
  }

  deleteAdById(id: number): Observable<AdModel> {
    return this.http.delete<AdModel>(`${environment.api}/ads/${id}`);
  }

  updateAd(id: number, ad: AdToCreateOrUpdateModel): Observable<AdModel> {
    return this.http.put<AdModel>(`${environment.api}/ads/${id}`, ad);
  }
}
