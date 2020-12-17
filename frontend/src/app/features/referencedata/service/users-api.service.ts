import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelModel, ModelToCreateOrUpdateModel} from '../model/model.model';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {UserModel, UserToCreateOrUpdateModel} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class UsersApiService {

  constructor(private readonly http: HttpClient) {}

  createUser(user: UserToCreateOrUpdateModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.api}/users`, user);
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.api}/users`);
  }

  deleteUserById(id: number): Observable<UserModel> {
    return this.http.delete<UserModel>(`${environment.api}/users/${id}`);
  }

  updateUser(id: number, user: UserToCreateOrUpdateModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${environment.api}/users/${id}`, user);
  }
}
