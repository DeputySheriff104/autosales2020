import {Component, Inject, OnInit} from '@angular/core';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ReferencedataAndTableNameDataModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {EntityModel} from '../../../../../features/referencedata/model/entity.model';

@Component({
  templateUrl: './delete-model.dialog.html',
  styleUrls: ['./delete-model.dialog.css']
})
export class DeleteModelDialog implements OnInit {

  constructor(
    private readonly modelsApiService: ModelsApiService,
    private readonly dialogRef: MatDialogRef<DeleteModelDialog, boolean>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: EntityModel
  ) {}

  ngOnInit(): void {
  }

  handleDeleteModelClick(): void {
    this.modelsApiService.deleteModelById(this.data.id).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
