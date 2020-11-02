import {Component, Inject, OnInit} from '@angular/core';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IdAndTableNameDataModel, TableNameDataModel} from '../../../../../features/referencedata/model/referencedata.model';

@Component({
  templateUrl: './delete-data.dialog.html',
  styleUrls: ['./delete-data.dialog.css']
})
// tslint:disable-next-line:component-class-suffix
export class DeleteDataDialog implements OnInit {

  constructor(
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly dialogRef: MatDialogRef<DeleteDataDialog, boolean>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: IdAndTableNameDataModel
  ) { }

  ngOnInit(): void {
  }

  handleDeleteDataClick(): void {
    this.referencedataApiService.deleteDataById(this.data.id, this.data.tableName).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
