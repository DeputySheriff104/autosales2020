import { Component, OnInit } from '@angular/core';
import {ModelModel} from '../../../features/referencedata/model/model.model';
import {EngineModel} from '../../../features/referencedata/model/engine.model';
import {CreateModelDialog} from '../models/dialogs/create-model/create-model.dialog';
import {ModelsApiService} from '../../../features/referencedata/service/models-api.service';
import {MatDialog} from '@angular/material/dialog';
import {EnginesApiService} from '../../../features/referencedata/service/engines-api.service';
import {CreateEngineDialog} from './dialogs/create-engine/create-engine.dialog';
import {UpdateUserDialog} from '../users/dialogs/update-user/update-user.dialog';
import {UserModel} from '../../../features/referencedata/model/user.model';
import {UpdateEngineDialog} from './dialogs/update-engine/update-engine.dialog';
import {DeleteAdDialog} from '../ads/dialogs/delete-ad/delete-ad.dialog';
import {DeleteEngineDialog} from './dialogs/delete-engine/delete-engine.dialog';

@Component({
  selector: 'app-engines',
  templateUrl: './engines.component.html',
  styleUrls: ['./engines.component.css']
})
export class EnginesComponent implements OnInit {

  allEngines: EngineModel[];

  constructor(
    private readonly enginesApiService: EnginesApiService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.enginesApiService.getAllEngines().subscribe((result) => {
      this.allEngines = result;
    });
  }

  handleCreateEngineClick(): void {
    const dialogRef = this.dialog.open(CreateEngineDialog);
    dialogRef.afterClosed().subscribe(() => {
      this.enginesApiService.getAllEngines().subscribe((result) => {
        this.allEngines = result;
      });
    });
  }

  handleDeleteEngineClick(engineId: number): void {
    const dialogRef = this.dialog.open(DeleteEngineDialog, {
      data: {
        id: engineId
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.enginesApiService.getAllEngines().subscribe((result) => {
        this.allEngines = result;
      });
    });
  }

  handleUpdateEngineClick(oldEngineParam: EngineModel): void {
    const dialogRef = this.dialog.open(UpdateEngineDialog, {
      data: {
        oldEngine: oldEngineParam
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.enginesApiService.getAllEngines().subscribe((result) => {
        this.allEngines = result;
      });
    });
  }
}
