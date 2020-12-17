import {Component, Inject, OnInit} from '@angular/core';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ReferencedataAndTableNameDataModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {EntityModel} from '../../../../../features/referencedata/model/entity.model';
import {VehiclesApiService} from '../../../../../features/referencedata/service/vehicles-api.service';

@Component({
  templateUrl: './delete-vehicle.dialog.html',
  styleUrls: ['./delete-vehicle.dialog.css']
})
export class DeleteVehicleDialog implements OnInit {

  constructor(
    private readonly vehiclesApiService: VehiclesApiService,
    private readonly dialogRef: MatDialogRef<DeleteVehicleDialog, boolean>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: EntityModel
  ) {}

  ngOnInit(): void {
  }

  handleDeleteVehiclesClick(): void {
    this.vehiclesApiService.deleteVehicleById(this.data.id).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
