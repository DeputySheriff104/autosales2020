import {EntityModel} from './entity.model';
import {ReferencedataModel} from './referencedata.model';
import {EngineModel} from './engine.model';
import {ModelModel} from './model.model';

export interface VehicleModel extends EntityModel {
  color?: ReferencedataModel;
  model?: ModelModel;
  bodytype?: ReferencedataModel;
  engine?: EngineModel;
  region?: ReferencedataModel;
  mileage?: number;
  year?: number;
}

export interface VehicleToCreateOrUpdateModel {
  colorId: number;
  modelId: number;
  bodytypeId: number;
  engineId: number;
  regionId: number;
  mileage: number;
  year: number;
}

export interface VehicleDialogDataModel {
  oldVehicle: VehicleModel;
}
