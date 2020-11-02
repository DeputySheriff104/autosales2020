import {Component, Inject, OnInit} from '@angular/core';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  IdAndTableNameDataModel,
  ReferencedataToCreateOrUpdateModel,
  TableNameDataModel
} from '../../../../../features/referencedata/model/referencedata.model';

@Component({
  templateUrl: './update-data.dialog.html',
  styleUrls: ['./update-data.dialog.css']
})
// tslint:disable-next-line:component-class-suffix
export class UpdateDataDialog implements OnInit {

  name: string;

  constructor(
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly dialogRef: MatDialogRef<UpdateDataDialog, boolean>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: IdAndTableNameDataModel
  ) { }

  ngOnInit(): void {
  }

  handleUpdateDataClick(): void {
    const referenceData: ReferencedataToCreateOrUpdateModel = {
      name: this.name
    };
    this.referencedataApiService.updateData(this.data.id, referenceData, this.data.tableName).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
