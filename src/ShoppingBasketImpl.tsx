import { ShoppingBasket, StoreItemReference } from "./types";

class ShoppingBasketImpl implements ShoppingBasket {
    private basket: Map<StoreItemReference, number> = new Map();
  
    addSamples(item: StoreItemReference, n: number): ShoppingBasket {
      const currentSamples = this.getSamples(item);
      const newSamples = Math.max(currentSamples + n, 0);
      this.basket.set(item, newSamples);
      return this;
    }
    
  
    removeItem(item: StoreItemReference): ShoppingBasket {
      this.basket.delete(item);
      return this;
    }
  
    clear(): ShoppingBasket {
      this.basket.clear();
      return this;
    }
  
    getSamples(item: StoreItemReference): number {
      return this.basket.get(item) ?? 0;
    }
  
    getAllItems(): [StoreItemReference, number][] {
      return Array.from(this.basket.entries());
    }
  }
  
  export default ShoppingBasketImpl;

  