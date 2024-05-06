import React from 'react';
import './App.css';
import StoreItemGrid from './StoreItemGrid';
import ShoppingBasketManager from './ShoppingBasketManager';
import { ShoppingBasket, StoreItemReference, StoreItem } from './types';
import inventoryData from './inventory.json';
import ShoppingBasketImpl from './ShoppingBasketImpl'

const App: React.FC = () => {
  const initialBasket: ShoppingBasket = new ShoppingBasketImpl(); // Créez un panier d'achat initial

  // Convertir le tableau d'objets en Map<string, StoreItem>
  const inventory = new Map<string, StoreItem>();
  inventoryData.forEach((item: StoreItem) => {
    inventory.set(item.name, item);
  });

  return (
    <div className="App">
      <h1>Ma Boutique en Ligne</h1>
      <div className="content">
        <ShoppingBasketManager basket={initialBasket} inventory={inventory} />
        <StoreItemGrid inventory={inventory} />
      </div>
    </div>
  );
};

export default App;
