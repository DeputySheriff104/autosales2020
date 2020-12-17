import {EntityModel} from './entity.model';
import {ReferencedataModel} from './referencedata.model';

export interface EngineModel extends EntityModel {
  type?: ReferencedataModel;
  horsepower?: number;
  displacement?: number;
  power?: number;
}

export interface EngineToCreateOrUpdateModel {
  typeId: number;
  horsepower: number;
  displacement: number;
  power: number;
}

export interface EngineDialogDataModel {
  oldEngine: EngineModel;
}
