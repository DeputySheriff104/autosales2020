import {ReferencedataModel} from './referencedata.model';
import {EntityModel} from './entity.model';

export interface ModelModel extends EntityModel {
  manufacturer?: ReferencedataModel;
  name?: string;
}

export interface ModelToCreateOrUpdateModel {
  manufacturerId: number;
  name: string;
}

export interface ModelDialogDataModel {
  oldModel: ModelModel;
}
