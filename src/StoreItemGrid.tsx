import React, { useState } from 'react';
import { ShoppingBasket, StoreItem } from './types';
import StoreItemDisplayer from './StoreItemDisplayer';
import ShoppingBasketImpl from './ShoppingBasketImpl';

interface StoreItemGridProps {
  inventory: Map<string, StoreItem>; // Utiliser une Map<string, StoreItem> pour l'inventaire
}

const StoreItemGrid: React.FC<StoreItemGridProps> = ({ inventory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [basket, setBasket] = useState<ShoppingBasket>(new ShoppingBasketImpl());

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const addToCart = (item: StoreItem) => {
    setBasket(b => b.addSamples(item.name, 1)); // Ajouter l'article au panier avec la fonction addSamples
    console.log(basket);
  };

  // Convertir la Map en tableau pour filtrer les éléments
  const filteredInventory = Array.from(inventory.values()).filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Rechercher des produits..." 
        value={searchQuery} 
        onChange={handleSearchChange} 
      />
      <div className="store-item-grid">
        {filteredInventory.map((item, index) => (
          <StoreItemDisplayer key={index} item={item} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default StoreItemGrid;
