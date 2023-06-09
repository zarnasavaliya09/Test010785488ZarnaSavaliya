export interface Box {
  size: number;
  description: string;
  shippingLabelCode: string;
  recipient?: string;
  weight: number;
}
