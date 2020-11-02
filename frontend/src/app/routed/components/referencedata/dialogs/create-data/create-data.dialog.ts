import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {ReferencedataToCreateOrUpdateModel, TableNameDataModel} from '../../../../../features/referencedata/model/referencedata.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  templateUrl: './create-data.dialog.html',
  styleUrls: ['./create-data.dialog.css']
})
// tslint:disable-next-line:component-class-suffix
export class CreateDataDialog implements OnInit {

  name: string;

  constructor(
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly dialogRef: MatDialogRef<CreateDataDialog, boolean>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: TableNameDataModel
  ) { }

  ngOnInit(): void {
  }

  handleCreateDataClick(): void {
    const referenceData: ReferencedataToCreateOrUpdateModel = {
      name: this.name
    };
    this.referencedataApiService.createData(referenceData, this.data.tableName).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
