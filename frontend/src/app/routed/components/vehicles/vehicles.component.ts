import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../features/referencedata/model/user.model';
import {UsersApiService} from '../../../features/referencedata/service/users-api.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateUserDialog} from '../users/dialogs/create-user/create-user.dialog';
import {VehicleModel} from '../../../features/referencedata/model/vehicle.model';
import {VehiclesApiService} from '../../../features/referencedata/service/vehicles-api.service';
import {CreateVehicleDialog} from './dialogs/create-vehicle/create-vehicle.dialog';
import {UpdateAdDialog} from '../ads/dialogs/update-ad/update-ad.dialog';
import {UpdateVehicleDialog} from './dialogs/update-vehicle/update-vehicle.dialog';
import {AdModel} from '../../../features/referencedata/model/ad.model';
import {DeleteEngineDialog} from '../engines/dialogs/delete-engine/delete-engine.dialog';
import {DeleteVehicleDialog} from './dialogs/delete-vehicle/delete-vehicle.dialog';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  allVehicles: VehicleModel[];

  constructor(
    private readonly vehiclesApiService: VehiclesApiService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.vehiclesApiService.getAllVehicles().subscribe((result) => {
      this.allVehicles = result;
    });
  }

  handleCreateVehicleClick(): void {
    const dialogRef = this.dialog.open(CreateVehicleDialog);
    dialogRef.afterClosed().subscribe(() => {
      this.vehiclesApiService.getAllVehicles().subscribe((result) => {
        this.allVehicles = result;
      });
    });
  }

  handleDeleteVehicleClick(vehicleId: number): void {
    const dialogRef = this.dialog.open(DeleteVehicleDialog, {
      data: {
        id: vehicleId
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.vehiclesApiService.getAllVehicles().subscribe((result) => {
        this.allVehicles = result;
      });
    });
  }

  handleUpdateVehicleClick(oldVehicleParam: VehicleModel): void {
    const dialogRef = this.dialog.open(UpdateVehicleDialog, {
      data: {
        oldVehicle: oldVehicleParam
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.vehiclesApiService.getAllVehicles().subscribe((result) => {
        this.allVehicles = result;
      });
    });
  }

}
