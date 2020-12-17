import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelModel, ModelToCreateOrUpdateModel} from '../model/model.model';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {EngineModel, EngineToCreateOrUpdateModel} from '../model/engine.model';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class EnginesApiService {

  constructor(private readonly http: HttpClient) {}

  createEngine(engine: EngineToCreateOrUpdateModel): Observable<EngineModel> {
    return this.http.post<EngineModel>(`${environment.api}/engines`, engine);
  }

  getAllEngines(): Observable<EngineModel[]> {
    return this.http.get<EngineModel[]>(`${environment.api}/engines`);
  }

  deleteEngineById(id: number): Observable<EngineModel> {
    return this.http.delete<EngineModel>(`${environment.api}/engines/${id}`);
  }

  updateEngine(id: number, engine: EngineToCreateOrUpdateModel): Observable<EngineModel> {
    return this.http.put<EngineModel>(`${environment.api}/engines/${id}`, engine);
  }
}
