import {Component, Inject, OnInit} from '@angular/core';
import {ReferencedataAndTableNameDataModel, ReferencedataModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {ModelDialogDataModel, ModelModel, ModelToCreateOrUpdateModel} from '../../../../../features/referencedata/model/model.model';
import {SortingUtilsService} from '../../../../../features/referencedata/service/sorting-utils.service';
import {
  VehicleDialogDataModel,
  VehicleModel,
  VehicleToCreateOrUpdateModel
} from '../../../../../features/referencedata/model/vehicle.model';
import {EngineModel} from '../../../../../features/referencedata/model/engine.model';
import {UserModel} from '../../../../../features/referencedata/model/user.model';
import {AdsApiService} from '../../../../../features/referencedata/service/ads-api.service';
import {UsersApiService} from '../../../../../features/referencedata/service/users-api.service';
import {EnginesApiService} from '../../../../../features/referencedata/service/engines-api.service';
import {VehiclesApiService} from '../../../../../features/referencedata/service/vehicles-api.service';
import {AdDialogDataModel, AdToCreateOrUpdateModel} from '../../../../../features/referencedata/model/ad.model';

@Component({
  templateUrl: './update-vehicle.dialog.html',
  styleUrls: ['./update-vehicle.dialog.css']
})
export class UpdateVehicleDialog implements OnInit {

  newVehicle: VehicleModel = {
    model: {manufacturer: {}},
    engine: {},
    color: {},
    bodytype: {},
    region: {}
  };
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
    private readonly dialogRef: MatDialogRef<UpdateVehicleDialog, boolean>,
    @Inject(MAT_DIALOG_DATA)
    readonly data: VehicleDialogDataModel
  ) { }

  ngOnInit(): void {
    this.enginesApiService.getAllEngines().subscribe((result) => {
      this.allEngines = result;
      this.newVehicle.engine = this.allEngines.find(x => x.id === this.data.oldVehicle.engine.id);
    });
    this.referencedataApiService.getAllData('colors').subscribe((result) => {
      this.allColors = result;
      this.newVehicle.color = this.allColors.find(x => x.id === this.data.oldVehicle.color.id);
    });
    this.referencedataApiService.getAllData('bodytypes').subscribe((result) => {
      this.allBodytypes = result;
      this.newVehicle.bodytype = this.allBodytypes.find(x => x.id === this.data.oldVehicle.bodytype.id);
    });
    this.referencedataApiService.getAllData('manufacturers').subscribe((result) => {
      this.allManufacturers = result;
      this.newVehicle.model.manufacturer =  this.allManufacturers.find(x => x.id === this.data.oldVehicle.model.manufacturer.id);
      this.modelsApiService.getAllModelsByManufacturerName(this.data.oldVehicle.model.manufacturer.name).subscribe((result2) => {
        this.allModels = result2;
        this.newVehicle.model = this.allModels.find(x => x.id === this.data.oldVehicle.model.id);
        this.selectedManufacturer = this.allManufacturers.find(x => x.id === this.data.oldVehicle.model.manufacturer.id);
      });
    });
    this.referencedataApiService.getAllData('regions').subscribe((result) => {
      this.allRegions = result;
      this.newVehicle.region = this.allRegions.find(x => x.id === this.data.oldVehicle.region.id);
    });
    this.newVehicle.year = this.data.oldVehicle.year;
    this.newVehicle.mileage = this.data.oldVehicle.mileage;
  }

  handleUpdateVehicleClick(): void {
    const vehicleToCreateOrUpdateModel: VehicleToCreateOrUpdateModel = {
      colorId: this.newVehicle.color.id,
      modelId: this.newVehicle.model.id,
      bodytypeId: this.newVehicle.bodytype.id,
      engineId: this.newVehicle.engine.id,
      regionId: this.newVehicle.region.id,
      mileage: this.newVehicle.mileage,
      year: this.newVehicle.year,
    };
    this.vehiclesApiService.updateVehicle(this.data.oldVehicle.id, vehicleToCreateOrUpdateModel).subscribe(
      () => {this.dialogRef.close(true);
      });
  }

  getModelsForManufacturer(manufacturerName: string): void {
    this.modelsApiService.getAllModelsByManufacturerName(manufacturerName).subscribe((result) => {
      this.allModels = result;
    });
  }
}
