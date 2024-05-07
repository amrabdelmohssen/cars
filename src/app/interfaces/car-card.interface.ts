export interface CarCard {
  name: string;
  review: number;
  price: number;
  reviewCount:number;
  isAirConditioning: boolean;
  doorsNumber: number;
  passangersNumber: number;
  systemType: SystemType;
  imagePath :string
}

export enum SystemType {
  Manual = 'manual',
  Auto = 'auto',
}
