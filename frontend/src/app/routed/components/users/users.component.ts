import { Component, OnInit } from '@angular/core';
import {EngineModel} from '../../../features/referencedata/model/engine.model';
import {EnginesApiService} from '../../../features/referencedata/service/engines-api.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateEngineDialog} from '../engines/dialogs/create-engine/create-engine.dialog';
import {UserModel} from '../../../features/referencedata/model/user.model';
import {UsersApiService} from '../../../features/referencedata/service/users-api.service';
import {CreateUserDialog} from './dialogs/create-user/create-user.dialog';
import {UpdateVehicleDialog} from '../vehicles/dialogs/update-vehicle/update-vehicle.dialog';
import {VehicleModel} from '../../../features/referencedata/model/vehicle.model';
import {UpdateUserDialog} from './dialogs/update-user/update-user.dialog';
import {DeleteEngineDialog} from '../engines/dialogs/delete-engine/delete-engine.dialog';
import {DeleteUserDialog} from './dialogs/delete-user/delete-user.dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers: UserModel[];

  constructor(
    private readonly usersApiService: UsersApiService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.usersApiService.getAllUsers().subscribe((result) => {
      this.allUsers = result;
    });
  }

  handleCreateUserClick(): void {
    const dialogRef = this.dialog.open(CreateUserDialog);
    dialogRef.afterClosed().subscribe(() => {
      this.usersApiService.getAllUsers().subscribe((result) => {
        this.allUsers = result;
      });
    });
  }

  handleDeleteUserClick(userId: number): void {
    const dialogRef = this.dialog.open(DeleteUserDialog, {
      data: {
        id: userId
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.usersApiService.getAllUsers().subscribe((result) => {
        this.allUsers = result;
      });
    });
  }

  handleUpdateUserClick(oldUserParam: UserModel): void {
    const dialogRef = this.dialog.open(UpdateUserDialog, {
      data: {
        oldUser: oldUserParam
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.usersApiService.getAllUsers().subscribe((result) => {
        this.allUsers = result;
      });
    });
  }

}
