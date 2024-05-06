import React from 'react';
import { StoreItem } from './types';

interface StoreItemDisplayerProps {
  item: StoreItem;
  onAddToCart: (item: StoreItem) => void; // Fonction pour ajouter un article au panier
}

const StoreItemDisplayer: React.FC<StoreItemDisplayerProps> = ({ item, onAddToCart }) => {

  const handleAddToCart = () => {
    onAddToCart(item); // Appeler la fonction onAddToCart avec l'article comme argument
  };

  return (
    <div className="store-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Prix: {item.price} €</p>
      {item.discount && <p>Remise: {item.discount}%</p>}
      <img src={item.picture} alt="Photo de l'article" />

      <button onClick={handleAddToCart}>Ajouter au panier</button> {/* Ajouter un bouton avec un gestionnaire d'événements onClick */}
    </div>
  );
};

export default StoreItemDisplayer;
