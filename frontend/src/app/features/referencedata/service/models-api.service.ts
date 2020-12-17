import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ReferencedataModel, ReferencedataToCreateOrUpdateModel} from '../model/referencedata.model';
import {ModelModel, ModelToCreateOrUpdateModel} from '../model/model.model';

@Injectable({
  providedIn: 'root'
})
export class ModelsApiService {

  constructor(private readonly http: HttpClient) {}

  createModel(model: ModelToCreateOrUpdateModel): Observable<ModelModel> {
    return this.http.post<ModelModel>(`${environment.api}/models`, model);
  }

  getAllModels(): Observable<ModelModel[]> {
    return this.http.get<ModelModel[]>(`${environment.api}/models`);
  }

  deleteModelById(id: number): Observable<ModelModel> {
    return this.http.delete<ModelModel>(`${environment.api}/models/${id}`);
  }

  updateModel(id: number, model: ModelToCreateOrUpdateModel): Observable<ModelModel> {
    return this.http.put<ModelModel>(`${environment.api}/models/${id}`, model);
  }

  getAllModelsByManufacturerName(manufacturerName: string): Observable<ModelModel[]> {
    return this.http.get<ModelModel[]>(`${environment.api}/models/${manufacturerName}`);
  }
}
