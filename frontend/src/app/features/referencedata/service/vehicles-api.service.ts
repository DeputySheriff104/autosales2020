import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelModel, ModelToCreateOrUpdateModel} from '../model/model.model';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {VehicleModel, VehicleToCreateOrUpdateModel} from '../model/vehicle.model';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class VehiclesApiService {

  constructor(private readonly http: HttpClient) {}

  createVehicle(vehicle: VehicleToCreateOrUpdateModel): Observable<number> {
    return this.http.post<number>(`${environment.api}/vehicles`, vehicle);
  }

  getAllVehicles(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(`${environment.api}/vehicles`);
  }

  deleteVehicleById(id: number): Observable<VehicleModel> {
    return this.http.delete<VehicleModel>(`${environment.api}/vehicles/${id}`);
  }

  updateVehicle(id: number, vehicle: VehicleToCreateOrUpdateModel): Observable<VehicleModel> {
    return this.http.put<VehicleModel>(`${environment.api}/vehicles/${id}`, vehicle);
  }
}
