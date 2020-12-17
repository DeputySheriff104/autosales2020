import { Component, OnInit } from '@angular/core';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MatDialogRef} from '@angular/material/dialog';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {ReferencedataModel, ReferencedataToCreateOrUpdateModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ModelToCreateOrUpdateModel} from '../../../../../features/referencedata/model/model.model';

@Component({
  templateUrl: './create-model.dialog.html',
  styleUrls: ['./create-model.dialog.css']
})
export class CreateModelDialog implements OnInit {

  name: string;
  selectedManufacturer: ReferencedataModel;
  allManufacturers: ReferencedataModel[];

  constructor(
    private readonly modelsApiService: ModelsApiService,
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly dialogRef: MatDialogRef<CreateModelDialog, boolean>
  ) { }

  ngOnInit(): void {
    this.referencedataApiService.getAllData('manufacturers').subscribe((result) => {
      this.allManufacturers = result;
    });
  }

  handleCreateModelClick(): void {
    const modelToCreateOrUpdateModel: ModelToCreateOrUpdateModel = {
      manufacturerId: this.selectedManufacturer.id,
      name: this.name
    };
    this.modelsApiService.createModel(modelToCreateOrUpdateModel).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
