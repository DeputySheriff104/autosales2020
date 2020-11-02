import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ReferencedataModel, ReferencedataToCreateOrUpdateModel} from '../model/referencedata.model';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ReferencedataApiService {

  constructor(private readonly http: HttpClient) {}

  createData(referenceData: ReferencedataToCreateOrUpdateModel, tableName: string): Observable<ReferencedataModel> {
    return this.http.post<ReferencedataModel>(`${environment.api}/${tableName}`, referenceData);
  }

  getAllData(tableName: string): Observable<ReferencedataModel[]> {
    return this.http.get<ReferencedataModel[]>(`${environment.api}/${tableName}`);
  }

  deleteDataById(id: number, tableName: string): Observable<ReferencedataModel> {
    return this.http.delete<ReferencedataModel>(`${environment.api}/${tableName}/${id}`);
  }

  updateData(id: number, referenceData: ReferencedataToCreateOrUpdateModel, tableName: string): Observable<ReferencedataModel> {
    return this.http.put<ReferencedataModel>(`${environment.api}/${tableName}/${id}`, referenceData);
  }
}
