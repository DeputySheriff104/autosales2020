import {EntityModel} from './entity.model';
import {UserModel} from './user.model';
import {VehicleModel} from './vehicle.model';

export interface AdModel extends EntityModel {
  user?: UserModel;
  vehicle?: VehicleModel;
  description?: string;
  price?: number;
  date?: string;
}

export interface AdToCreateOrUpdateModel {
  userId: number;
  vehicleId: number;
  description: string;
  price: number;
}

export interface AdDialogDataModel {
  oldAd: AdModel;
}
