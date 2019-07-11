export interface CamsModel {
  name: string;
  prov: string;
  cams: {
    [key: string]: CamItemModel;
  };
  camsArray?: CamItemModel[];
}

export interface CamItemModel {
  name: string;
  url: string;
}
