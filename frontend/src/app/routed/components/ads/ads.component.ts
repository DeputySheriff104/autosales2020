import { Component, OnInit } from '@angular/core';
import {VehicleModel} from '../../../features/referencedata/model/vehicle.model';
import {VehiclesApiService} from '../../../features/referencedata/service/vehicles-api.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateVehicleDialog} from '../vehicles/dialogs/create-vehicle/create-vehicle.dialog';
import {UserModel} from '../../../features/referencedata/model/user.model';
import {AdModel} from '../../../features/referencedata/model/ad.model';
import {AdsApiService} from '../../../features/referencedata/service/ads-api.service';
import {CreateAdDialog} from './dialogs/create-ad/create-ad.dialog';
import {UpdateModelDialog} from '../models/dialogs/update-model/update-model.dialog';
import {ModelModel} from '../../../features/referencedata/model/model.model';
import {UpdateAdDialog} from './dialogs/update-ad/update-ad.dialog';
import {DeleteModelDialog} from '../models/dialogs/delete-model/delete-model.dialog';
import {DeleteAdDialog} from './dialogs/delete-ad/delete-ad.dialog';
import {ReferencedataModel} from '../../../features/referencedata/model/referencedata.model';
import {EngineModel} from '../../../features/referencedata/model/engine.model';
import {UsersApiService} from '../../../features/referencedata/service/users-api.service';
import {ModelsApiService} from '../../../features/referencedata/service/models-api.service';
import {EnginesApiService} from '../../../features/referencedata/service/engines-api.service';
import {ReferencedataApiService} from '../../../features/referencedata/service/referencedata-api.service';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  manufacturer: string;
  amount: number;
  minPrice: number;
  maxPrice: number;
  avgPrice: number;
  sumMileage: number;
}

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  displayedColumns: string[] = ['Manufacturer', 'Amount', 'Min price', 'Max price', 'Avg price', 'Sum mileage'];
  elementData: PeriodicElement[] = [];
  dataSource: PeriodicElement[];

  allAds: AdModel[];
  count: number;

  filterAd: AdModel = {user: {type: {}}};
  filterVehicle: VehicleModel = {
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
  search: string;
  // tslint:disable-next-line:ban-types
  statistics: Object[];

  constructor(
    private readonly adsApiService: AdsApiService,
    private readonly usersApiService: UsersApiService,
    private readonly modelsApiService: ModelsApiService,
    private readonly enginesApiService: EnginesApiService,
    private readonly vehiclesApiService: VehiclesApiService,
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refresh();
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
    this.getStatistics();
  }

  handleCreateAdClick(): void {
    const dialogRef = this.dialog.open(CreateAdDialog);
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  handleDeleteAdClick(adId: number): void {
    const dialogRef = this.dialog.open(DeleteAdDialog, {
      data: {
        id: adId
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  handleUpdateAdClick(oldAdParam: AdModel): void {
    const dialogRef = this.dialog.open(UpdateAdDialog, {
      data: {
        oldAd: oldAdParam
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  private refresh(): void {
    this.adsApiService.getAllAds().subscribe((result) => {
      this.allAds = result;
      this.count = this.allAds.length;
    });
    this.getStatistics();
  }

  refreshFilter(): void {
    this.search = '';
    let isSemicolonNeeded = false;
    if (
      (this.filterVehicle.color != null && this.filterVehicle.color.name !== undefined) ||
      (this.selectedManufacturer != null && this.selectedManufacturer.name !== undefined) ||
      (this.filterVehicle.model != null && this.filterVehicle.model.name !== undefined) ||
      (this.filterVehicle.bodytype != null && this.filterVehicle.bodytype.name !== undefined) ||
      (this.filterVehicle.engine != null && this.filterVehicle.engine.id !== undefined) ||
      (this.filterVehicle.region != null && this.filterVehicle.region.name !== undefined) ||
      (this.filterAd.user != null && this.filterAd.user.username !== undefined)) {
      this.search += '?search=';
      if (this.filterVehicle.color != null && this.filterVehicle.color.name !== undefined) {
        this.search += 'vehicle.color.name==' + this.filterVehicle.color.name;
        isSemicolonNeeded = true;
      }
      if (this.selectedManufacturer != null && this.selectedManufacturer.name !== undefined) {
        if (isSemicolonNeeded) {
          this.search += ';';
        }
        isSemicolonNeeded = true;
        this.search += 'vehicle.model.manufacturer.name==' + this.selectedManufacturer.name;
      }
      if (this.filterVehicle.model != null && this.filterVehicle.model.name !== undefined) {
        if (isSemicolonNeeded) {
          this.search += ';';
        }
        isSemicolonNeeded = true;
        this.search += 'vehicle.model.name==' + this.filterVehicle.model.name;
      }
      if (this.filterVehicle.bodytype != null && this.filterVehicle.bodytype.name !== undefined) {
        if (isSemicolonNeeded) {
          this.search += ';';
        }
        isSemicolonNeeded = true;
        this.search += 'vehicle.bodytype.name==' + this.filterVehicle.bodytype.name;
      }
      if (this.filterVehicle.engine != null && this.filterVehicle.engine.id !== undefined) {
        if (isSemicolonNeeded) {
          this.search += ';';
        }
        isSemicolonNeeded = true;
        this.search += 'vehicle.engine.id==' + this.filterVehicle.engine.id;
      }
      if (this.filterVehicle.region != null && this.filterVehicle.region.name !== undefined) {
        if (isSemicolonNeeded) {
          this.search += ';';
        }
        isSemicolonNeeded = true;
        this.search += 'vehicle.region.name==' + this.filterVehicle.region.name;
      }
      if (this.filterAd.user != null && this.filterAd.user.username !== undefined) {
        if (isSemicolonNeeded) {
          this.search += ';';
        }
        this.search += 'user.username==' + this.filterAd.user.username;
      }
    }
    this.adsApiService.getAllAdsFiltered(this.search).subscribe((result) => {
      this.allAds = result;
      this.count = this.allAds.length;
    });
  }

  getModelsForManufacturer(manufacturerName: string): void {
    this.modelsApiService.getAllModelsByManufacturerName(manufacturerName).subscribe((result) => {
      this.allModels = result;
    });
  }

  getStatistics(): void {
    this.adsApiService.getStatistics().subscribe((result) => {
      this.statistics = result;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.statistics.length; i++) {
        const element: PeriodicElement = {
          manufacturer: this.statistics[i][0],
          amount: this.statistics[i][1].toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' '),
          minPrice: this.statistics[i][2].toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' '),
          maxPrice: this.statistics[i][3].toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' '),
          avgPrice: this.statistics[i][4].toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' '),
          sumMileage: this.statistics[i][5].toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ')
        };
        this.elementData.unshift(element);
      }
      this.dataSource = this.elementData;
      console.log('source', this.dataSource);
    });
  }
}
