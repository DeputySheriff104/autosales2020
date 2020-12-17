import { Component, OnInit } from '@angular/core';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MatDialogRef} from '@angular/material/dialog';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {ReferencedataModel, ReferencedataToCreateOrUpdateModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ModelModel, ModelToCreateOrUpdateModel} from '../../../../../features/referencedata/model/model.model';
import {VehicleModel, VehicleToCreateOrUpdateModel} from '../../../../../features/referencedata/model/vehicle.model';
import {EngineModel} from '../../../../../features/referencedata/model/engine.model';
import {AdModel, AdToCreateOrUpdateModel} from '../../../../../features/referencedata/model/ad.model';
import {EnginesApiService} from '../../../../../features/referencedata/service/engines-api.service';
import {VehiclesApiService} from '../../../../../features/referencedata/service/vehicles-api.service';
import {AdsApiService} from '../../../../../features/referencedata/service/ads-api.service';
import {UserModel} from '../../../../../features/referencedata/model/user.model';
import {UsersApiService} from '../../../../../features/referencedata/service/users-api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './create-ad.dialog.html',
  styleUrls: ['./create-ad.dialog.css']
})
export class CreateAdDialog implements OnInit {

  newAd: AdModel = {user: {type: {}}};
  newVehicle: VehicleModel = {
    model: {manufacturer: {}},
    engine: {type: {}}
  };
  allColors: ReferencedataModel[];
  allModels: ModelModel[];
  allBodytypes: ReferencedataModel[];
  allEngines: EngineModel[];
  allRegions: ReferencedataModel[];
  allManufacturers: ReferencedataModel[];
  allUsers: UserModel[];
  selectedManufacturer: ReferencedataModel;

  inputFormGroup: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private readonly adsApiService: AdsApiService,
    private readonly usersApiService: UsersApiService,
    private readonly modelsApiService: ModelsApiService,
    private readonly enginesApiService: EnginesApiService,
    private readonly vehiclesApiService: VehiclesApiService,
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly dialogRef: MatDialogRef<CreateAdDialog, boolean>
  ) { }

  ngOnInit(): void {
    // this.validate();
    this.loadData();
  }

  private loadData(): void {
    this.usersApiService.getAllUsers().subscribe((result) => {
      this.allUsers = result;
    });
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

  private validate(): void {
    this.inputFormGroup = this.formBuilder.group({
      yearCtrl: [
        '',
        [Validators.required, Validators.max(2020), Validators.min(1900), Validators.pattern('^[0-9]+$')]
      ],
      mileageCtrl: [
        '',
        [Validators.required, Validators.max(9999999), Validators.min(0), Validators.pattern('^[0-9]+$')]
      ],
      priceCtrl: [
        '',
        [Validators.required, Validators.max(999999999), Validators.min(0), Validators.pattern('^[0-9]+$')]
      ]
    });
  }

  handleCreateAdClick(): void {
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
      (result) => {
        const adToCreateOrUpdateModel: AdToCreateOrUpdateModel = {
          userId: this.newAd.user.id,
          vehicleId: result,
          description: this.newAd.description,
          price: this.newAd.price,
        };
        this.adsApiService.createAd(adToCreateOrUpdateModel).subscribe(() => {
          this.dialogRef.close(true);
        });
      });
  }

  getModelsForManufacturer(manufacturerName: string): void {
    this.modelsApiService.getAllModelsByManufacturerName(manufacturerName).subscribe((result) => {
      this.allModels = result;
    });
  }
}
