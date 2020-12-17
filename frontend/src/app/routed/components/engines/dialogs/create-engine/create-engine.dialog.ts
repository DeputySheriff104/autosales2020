import { Component, OnInit } from '@angular/core';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MatDialogRef} from '@angular/material/dialog';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {ReferencedataModel, ReferencedataToCreateOrUpdateModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ModelToCreateOrUpdateModel} from '../../../../../features/referencedata/model/model.model';
import {EnginesApiService} from '../../../../../features/referencedata/service/engines-api.service';
import {EngineModel, EngineToCreateOrUpdateModel} from '../../../../../features/referencedata/model/engine.model';

@Component({
  templateUrl: './create-engine.dialog.html',
  styleUrls: ['./create-engine.dialog.css']
})
export class CreateEngineDialog implements OnInit {

  newEngine: EngineModel = {};
  allTypes: ReferencedataModel[];

  constructor(
    private readonly enginesApiService: EnginesApiService,
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly dialogRef: MatDialogRef<CreateEngineDialog, boolean>
  ) { }

  ngOnInit(): void {
    this.referencedataApiService.getAllData('enginetypes').subscribe((result) => {
      this.allTypes = result;
    });
  }

  handleCreateEngineClick(): void {
    const engineToCreateOrUpdateModel: EngineToCreateOrUpdateModel = {
      typeId: this.newEngine.type.id,
      horsepower: this.newEngine.horsepower,
      displacement: this.newEngine.displacement,
      power: this.newEngine.power,
    };
    this.enginesApiService.createEngine(engineToCreateOrUpdateModel).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
