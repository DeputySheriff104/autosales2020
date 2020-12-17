import {EntityModel} from './entity.model';
import {ReferencedataModel} from './referencedata.model';

export interface UserModel extends EntityModel {
  type?: ReferencedataModel;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  username?: string;
  password?: string;
}

export interface UserToCreateOrUpdateModel {
  typeId: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  username: string;
  password: string;
}

export interface UserDialogDataModel {
  oldUser: UserModel;
}
