export interface ReferencedataModel {
  id: number;
  name: string;
}

export interface ReferencedataToCreateOrUpdateModel {
  name: string;
}

export interface TableNameDataModel {
  tableName: string;
}

export interface IdAndTableNameDataModel {
  id: number;
  tableName: string;
}
