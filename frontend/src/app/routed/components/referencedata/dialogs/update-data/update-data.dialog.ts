import {Component, Inject, OnInit} from '@angular/core';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  ReferencedataAndTableNameDataModel,
  ReferencedataToCreateOrUpdateModel,
  TableNameDataModel
} from '../../../../../features/referencedata/model/referencedata.model';

@Component({
  templateUrl: './update-data.dialog.html',
  styleUrls: ['./update-data.dialog.css']
})
export class UpdateDataDialog implements OnInit {

  constructor(
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly dialogRef: MatDialogRef<UpdateDataDialog, boolean>,
    @Inject(MAT_DIALOG_DATA)
    readonly data: ReferencedataAndTableNameDataModel
  ) { }

  ngOnInit(): void {
  }

  handleUpdateDataClick(): void {
    const referenceData: ReferencedataToCreateOrUpdateModel = {
      name: this.data.name
    };
    this.referencedataApiService.updateData(this.data.id, referenceData, this.data.tableName).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
