import {Component, Inject, OnInit} from '@angular/core';
import {ReferencedataAndTableNameDataModel, ReferencedataModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {EntityModel} from '../../../../../features/referencedata/model/entity.model';
import {ModelDialogDataModel, ModelModel, ModelToCreateOrUpdateModel} from '../../../../../features/referencedata/model/model.model';
import {SortingUtilsService} from '../../../../../features/referencedata/service/sorting-utils.service';
import {EngineDialogDataModel, EngineModel, EngineToCreateOrUpdateModel} from '../../../../../features/referencedata/model/engine.model';
import {EnginesApiService} from '../../../../../features/referencedata/service/engines-api.service';

@Component({
  templateUrl: './update-engine.dialog.html',
  styleUrls: ['./update-engine.dialog.css']
})
export class UpdateEngineDialog implements OnInit {

  newEngine: EngineModel = {};
  allTypes: ReferencedataModel[];

  constructor(
    private readonly enginesApiService: EnginesApiService,
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly dialogRef: MatDialogRef<UpdateEngineDialog, boolean>,
    @Inject(MAT_DIALOG_DATA)
    readonly data: EngineDialogDataModel
  ) { }

  ngOnInit(): void {
    this.referencedataApiService.getAllData('enginetypes').subscribe((result) => {
      this.allTypes = result;
      this.newEngine.type = this.allTypes.find(x => x.id === this.data.oldEngine.type.id);
    });
    this.newEngine.horsepower = this.data.oldEngine.horsepower;
    this.newEngine.displacement = this.data.oldEngine.displacement;
    this.newEngine.power = this.data.oldEngine.power;
  }

  handleUpdateEngineClick(): void {
    const engineToCreateOrUpdateModel: EngineToCreateOrUpdateModel = {
      typeId: this.newEngine.type.id,
      horsepower: this.newEngine.horsepower,
      displacement: this.newEngine.displacement,
      power: this.newEngine.power,
    };
    this.enginesApiService.updateEngine(this.data.oldEngine.id, engineToCreateOrUpdateModel).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
