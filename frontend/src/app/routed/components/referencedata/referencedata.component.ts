import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ReferencedataModel} from '../../../features/referencedata/model/referencedata.model';
import {ReferencedataApiService} from '../../../features/referencedata/service/referencedata-api.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateDataDialog} from './dialogs/create-data/create-data.dialog';
import {DeleteDataDialog} from './dialogs/delete-data/delete-data.dialog';
import {UpdateDataDialog} from './dialogs/update-data/update-data.dialog';

@Component({
  selector: 'app-referencedata',
  templateUrl: './referencedata.component.html',
  styleUrls: ['./referencedata.component.css']
})
export class ReferencedataComponent implements OnInit {

  tableName: string;

  allData: ReferencedataModel[] = [];

  private routeSubscription: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.tableName = params.tableName;
      this.referencedataApiService.getAllData(params.tableName).subscribe((result) => {
        this.allData = result;
      });
    });
  }

  handleCreateDataClick(): void {
    const dialogRef = this.dialog.open(CreateDataDialog, {
      data: {
        tableName: this.tableName
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.referencedataApiService.getAllData(this.tableName).subscribe((result) => {
        this.allData = result;
      });
    });
  }

  handleDeleteDataClick(dataId: number): void {
    const dialogRef = this.dialog.open(DeleteDataDialog, {
      data: {
        id: dataId,
        tableName: this.tableName
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.referencedataApiService.getAllData(this.tableName).subscribe((result) => {
        this.allData = result;
      });
    });
  }

  handleUpdateDataClick(dataId: number): void {
    const dialogRef = this.dialog.open(UpdateDataDialog, {
      data: {
        id: dataId,
        tableName: this.tableName
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.referencedataApiService.getAllData(this.tableName).subscribe((result) => {
        this.allData = result;
      });
    });
  }
}
