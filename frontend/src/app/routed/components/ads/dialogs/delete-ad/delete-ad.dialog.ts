import {Component, Inject, OnInit} from '@angular/core';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ReferencedataAndTableNameDataModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {EntityModel} from '../../../../../features/referencedata/model/entity.model';
import {AdsApiService} from '../../../../../features/referencedata/service/ads-api.service';

@Component({
  templateUrl: './delete-ad.dialog.html',
  styleUrls: ['./delete-ad.dialog.css']
})
export class DeleteAdDialog implements OnInit {

  constructor(
    private readonly adsApiService: AdsApiService,
    private readonly dialogRef: MatDialogRef<DeleteAdDialog, boolean>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: EntityModel
  ) {}

  ngOnInit(): void {
  }

  handleDeleteAdClick(): void {
    this.adsApiService.deleteAdById(this.data.id).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
