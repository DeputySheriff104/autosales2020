import { Component, OnInit } from '@angular/core';
import {ReferencedataApiService} from '../../../../../features/referencedata/service/referencedata-api.service';
import {MatDialogRef} from '@angular/material/dialog';
import {ModelsApiService} from '../../../../../features/referencedata/service/models-api.service';
import {ReferencedataModel, ReferencedataToCreateOrUpdateModel} from '../../../../../features/referencedata/model/referencedata.model';
import {ModelToCreateOrUpdateModel} from '../../../../../features/referencedata/model/model.model';
import {UserModel, UserToCreateOrUpdateModel} from '../../../../../features/referencedata/model/user.model';
import {UsersApiService} from '../../../../../features/referencedata/service/users-api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './create-user.dialog.html',
  styleUrls: ['./create-user.dialog.css']
})
export class CreateUserDialog implements OnInit {

  newUser: UserModel = {type: {}};
  allTypes: ReferencedataModel[];

  inputFormGroup: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private readonly usersApiService: UsersApiService,
    private readonly referencedataApiService: ReferencedataApiService,
    private readonly dialogRef: MatDialogRef<CreateUserDialog, boolean>
  ) { }

  ngOnInit(): void {
    this.loadAllData();
    // this.validate();
  }

  private loadAllData(): void {
    this.referencedataApiService.getAllData('usertypes').subscribe((result) => {
      this.allTypes = result;
    });
  }

  private validate(): void {
    this.inputFormGroup = this.formBuilder.group({
      usernameCtrl: ['', [Validators.required]],
      passwordCtrl: ['', [Validators.required]],
      typeCtrl: ['', [Validators.required]],
      firstNameCtrl: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z]+$')]
      ],
      lastNameCtrl: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z]+$')]
      ],
      phoneCtrl: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[0-9]+$')]
      ],
      emailCtrl: [
        '',
        [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
      ]
    });
  }

  handleCreateUserClick(): void {
    const userToCreateOrUpdateModel: UserToCreateOrUpdateModel = {
      typeId: this.newUser.type.id,
      firstName: this.newUser.firstName,
      lastName: this.newUser.lastName,
      phone: this.newUser.phone,
      email: this.newUser.email,
      username: this.newUser.username,
      password: this.newUser.password,
    };
    this.usersApiService.createUser(userToCreateOrUpdateModel).subscribe(
      () => {
        this.dialogRef.close(true);
      });
  }
}
