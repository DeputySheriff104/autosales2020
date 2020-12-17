import { Component, OnInit } from '@angular/core';
import {ModelModel} from '../../../features/referencedata/model/model.model';
import {ReferencedataApiService} from '../../../features/referencedata/service/referencedata-api.service';
import {MatDialog} from '@angular/material/dialog';
import {ModelsApiService} from '../../../features/referencedata/service/models-api.service';
import {CreateDataDialog} from '../referencedata/dialogs/create-data/create-data.dialog';
import {CreateModelDialog} from './dialogs/create-model/create-model.dialog';
import {DeleteDataDialog} from '../referencedata/dialogs/delete-data/delete-data.dialog';
import {DeleteModelDialog} from './dialogs/delete-model/delete-model.dialog';
import {UpdateDataDialog} from '../referencedata/dialogs/update-data/update-data.dialog';
import {UpdateMode} from '@angular/compiler-cli/src/ngtsc/typecheck/api';
import {UpdateModelDialog} from './dialogs/update-model/update-model.dialog';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  allModels: ModelModel[];

  constructor(
    private readonly modelsApiService: ModelsApiService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.modelsApiService.getAllModels().subscribe((result) => {
      this.allModels = result;
    });
  }

  handleDeleteModelClick(modelId: number): void {
    const dialogRef = this.dialog.open(DeleteModelDialog, {
      data: {
        id: modelId
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.modelsApiService.getAllModels().subscribe((result) => {
        this.allModels = result;
      });
    });
  }

  handleUpdateModelClick(oldModelParam: ModelModel): void {
    const dialogRef = this.dialog.open(UpdateModelDialog, {
      data: {
        oldModel: oldModelParam
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.modelsApiService.getAllModels().subscribe((result) => {
        this.allModels = result;
      });
    });
  }

  handleCreateModelClick(): void {
    const dialogRef = this.dialog.open(CreateModelDialog);
    dialogRef.afterClosed().subscribe(() => {
      this.modelsApiService.getAllModels().subscribe((result) => {
        this.allModels = result;
      });
    });
  }
}
