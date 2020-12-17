import {EntityModel} from './entity.model';

export interface ReferencedataModel extends EntityModel{
  name?: string;
}

export interface ReferencedataToCreateOrUpdateModel {
  name: string;
}

export interface TableNameDataModel {
  tableName: string;
}

export interface ReferencedataAndTableNameDataModel {
  id: number;
  name: string;
  tableName: string;
}
