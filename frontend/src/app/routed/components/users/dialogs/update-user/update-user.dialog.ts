import {Component, Inject, OnInit} from '@angular/core';
import {ReferencedataAndTableNameDataModel, ReferencedataModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {EntityModel} from '../../../../../features/referencedata/model/entity.model';
import {ModelDialogDataModel, ModelModel, ModelToCreateOrUpdateModel} from '../../../../../features/referencedata/model/model.model';
import {SortingUtilsService} from '../../../../../features/referencedata/service/sorting-utils.service';
import {UserDialogDataModel, UserModel, UserToCreateOrUpdateModel} from '../../../../../features/referencedata/model/user.model';
import {UsersApiService} from '../../../../../features/referencedata/service/users-api.service';
import {VehicleDialogDataModel} from '../../../../../features/referencedata/model/vehicle.model';

@Component({
  templateUrl: './update-user.dialog.html',
  styleUrls: ['./update-user.dialog.css']
})
export class UpdateUserDialog implements OnInit {

  newUser: UserModel = {type: {}};
  allTypes: ReferencedataModel[];

  constructor(
    private readonly usersApiService: UsersApiService,
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly dialogRef: MatDialogRef<UpdateUserDialog, boolean>,
    @Inject(MAT_DIALOG_DATA)
    readonly data: UserDialogDataModel
  ) { }

  ngOnInit(): void {
    this.referencedataApiService.getAllData('usertypes').subscribe((result) => {
      this.allTypes = result;
      this.newUser.type = this.allTypes.find(x => x.id === this.data.oldUser.type.id);
    });
    this.newUser.username = this.data.oldUser.username;
    this.newUser.password = this.data.oldUser.password;
    this.newUser.firstName = this.data.oldUser.firstName;
    this.newUser.lastName = this.data.oldUser.lastName;
    this.newUser.phone = this.data.oldUser.phone;
    this.newUser.email = this.data.oldUser.email;
  }

  handleUpdateUserClick(): void {
    const userToCreateOrUpdateModel: UserToCreateOrUpdateModel = {
      typeId: this.newUser.type.id,
      firstName: this.newUser.firstName,
      lastName: this.newUser.lastName,
      phone: this.newUser.phone,
      email: this.newUser.email,
      username: this.newUser.username,
      password: this.newUser.password,
    };
    this.usersApiService.updateUser(this.data.oldUser.id, userToCreateOrUpdateModel).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
