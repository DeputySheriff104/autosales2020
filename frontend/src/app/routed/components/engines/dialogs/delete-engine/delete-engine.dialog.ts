import {Component, Inject, OnInit} from '@angular/core';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ReferencedataAndTableNameDataModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {EntityModel} from '../../../../../features/referencedata/model/entity.model';
import {EnginesApiService} from '../../../../../features/referencedata/service/engines-api.service';

@Component({
  templateUrl: './delete-engine.dialog.html',
  styleUrls: ['./delete-engine.dialog.css']
})
export class DeleteEngineDialog implements OnInit {

  constructor(
    private readonly enginesApiService: EnginesApiService,
    private readonly dialogRef: MatDialogRef<DeleteEngineDialog, boolean>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: EntityModel
  ) {}

  ngOnInit(): void {
  }

  handleDeleteEngineClick(): void {
    this.enginesApiService.deleteEngineById(this.data.id).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
