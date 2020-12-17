import {Component, Inject, OnInit} from '@angular/core';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ReferencedataAndTableNameDataModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {EntityModel} from '../../../../../features/referencedata/model/entity.model';
import {UsersApiService} from '../../../../../features/referencedata/service/users-api.service';

@Component({
  templateUrl: './delete-user.dialog.html',
  styleUrls: ['./delete-user.dialog.css']
})
export class DeleteUserDialog implements OnInit {

  constructor(
    private readonly usersApiService: UsersApiService,
    private readonly dialogRef: MatDialogRef<DeleteUserDialog, boolean>,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: EntityModel
  ) {}

  ngOnInit(): void {
  }

  handleDeleteUserClick(): void {
    this.usersApiService.deleteUserById(this.data.id).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
