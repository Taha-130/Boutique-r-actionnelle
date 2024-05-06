
export interface StoreItem {
    name: string;
    description: string;
    price: number;
    discount?: number; // Propriété optionnelle pour le pourcentage de réduction
    picture: string
}

export type StoreItemReference = string;

export interface ShoppingBasket {
  addSamples(item: StoreItemReference, n: number): ShoppingBasket;
  removeItem(item: StoreItemReference): ShoppingBasket;
  clear(): ShoppingBasket;
  getSamples(item: StoreItemReference): number;
  getAllItems(): [StoreItemReference, number][];
}


