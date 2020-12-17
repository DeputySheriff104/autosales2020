import {Component, Inject, OnInit} from '@angular/core';
import {ReferencedataAndTableNameDataModel, ReferencedataModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {EntityModel} from '../../../../../features/referencedata/model/entity.model';
import {ModelDialogDataModel, ModelModel, ModelToCreateOrUpdateModel} from '../../../../../features/referencedata/model/model.model';
import {SortingUtilsService} from '../../../../../features/referencedata/service/sorting-utils.service';

@Component({
  templateUrl: './update-model.dialog.html',
  styleUrls: ['./update-model.dialog.css']
})
export class UpdateModelDialog implements OnInit {

  allManufacturers: ReferencedataModel[];
  selectedManufacturer: ReferencedataModel;

  constructor(
    private readonly modelsApiService: ModelsApiService,
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly sortingUtilsService: SortingUtilsService,
    private readonly dialogRef: MatDialogRef<UpdateModelDialog, boolean>,
    @Inject(MAT_DIALOG_DATA)
    readonly data: ModelDialogDataModel
  ) { }

  ngOnInit(): void {
    this.referencedataApiService.getAllData('manufacturers').subscribe((result) => {
      this.allManufacturers = result.sort(this.sortingUtilsService.sortById);
      this.selectedManufacturer = this.allManufacturers.find(x => x.id === this.data.oldModel.manufacturer.id);
    });
  }

  handleUpdateModelClick(): void {
    const modelToCreateOrUpdateModel: ModelToCreateOrUpdateModel = {
      manufacturerId: this.selectedManufacturer.id,
      name: this.data.oldModel.name
    };
    this.modelsApiService.updateModel(this.data.oldModel.id, modelToCreateOrUpdateModel).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
