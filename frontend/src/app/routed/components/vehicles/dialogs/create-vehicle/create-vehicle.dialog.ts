import { Component, OnInit } from '@angular/core';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MatDialogRef} from '@angular/material/dialog';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {ReferencedataModel, ReferencedataToCreateOrUpdateModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ModelModel, ModelToCreateOrUpdateModel} from '../../../../../features/referencedata/model/model.model';
import {UserModel} from '../../../../../features/referencedata/model/user.model';
import {VehicleModel, VehicleToCreateOrUpdateModel} from '../../../../../features/referencedata/model/vehicle.model';
import {EnginesApiService} from '../../../../../features/referencedata/service/engines-api.service';
import {EngineModel} from '../../../../../features/referencedata/model/engine.model';
import {VehiclesApiService} from '../../../../../features/referencedata/service/vehicles-api.service';

@Component({
  templateUrl: './create-vehicle.dialog.html',
  styleUrls: ['./create-vehicle.dialog.css']
})
export class CreateVehicleDialog implements OnInit {

  newVehicle: VehicleModel = {model: { manufacturer: {}}};
  allColors: ReferencedataModel[];
  allModels: ModelModel[];
  allBodytypes: ReferencedataModel[];
  allEngines: EngineModel[];
  allRegions: ReferencedataModel[];
  allManufacturers: ReferencedataModel[];
  selectedManufacturer: ReferencedataModel;


  constructor(
    private readonly modelsApiService: ModelsApiService,
    private readonly enginesApiService: EnginesApiService,
    private readonly vehiclesApiService: VehiclesApiService,
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly dialogRef: MatDialogRef<CreateVehicleDialog, boolean>
  ) { }

  ngOnInit(): void {
    this.enginesApiService.getAllEngines().subscribe((result) => {
      this.allEngines = result;
    });
    this.referencedataApiService.getAllData('colors').subscribe((result) => {
      this.allColors = result;
    });
    this.referencedataApiService.getAllData('bodytypes').subscribe((result) => {
      this.allBodytypes = result;
    });
    this.referencedataApiService.getAllData('manufacturers').subscribe((result) => {
      this.allManufacturers = result;
    });
    this.referencedataApiService.getAllData('regions').subscribe((result) => {
      this.allRegions = result;
    });
  }

  handleCreateVehicleClick(): void {
    const vehicleToCreateOrUpdateModel: VehicleToCreateOrUpdateModel = {
      colorId: this.newVehicle.color.id,
      modelId: this.newVehicle.model.id,
      bodytypeId: this.newVehicle.bodytype.id,
      engineId: this.newVehicle.engine.id,
      regionId: this.newVehicle.region.id,
      mileage: this.newVehicle.mileage,
      year: this.newVehicle.year,
    };
    this.vehiclesApiService.createVehicle(vehicleToCreateOrUpdateModel).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }

  getModelsForManufacturer(manufacturerName: string): void {
    this.modelsApiService.getAllModelsByManufacturerName(manufacturerName).subscribe((result) => {
      this.allModels = result;
      console.log('allModels', this.allModels);
    });
  }
}
