import React from 'react';
import { ShoppingBasket, StoreItemReference, StoreItem } from './types';

interface ShoppingBasketManagerProps {
  basket: ShoppingBasket;
  inventory: Map<StoreItemReference, StoreItem>;
}

const ShoppingBasketManager: React.FC<ShoppingBasketManagerProps> = ({ basket, inventory }) => {
  // Ajoutez des consoles.log pour afficher les données du panier et de l'inventaire
  console.log("Panier d'achat:", basket);
  console.log("Inventaire:", inventory);

  return (
    <div className="shopping-basket">
      <h2>Panier d'achat</h2>
      <table>
        <thead>
          <tr>
            <th>Quantité</th>
            <th>Article</th>
            <th>Prix unitaire</th>
            <th>Prix total</th>
          </tr>
        </thead>
        <tbody>
          {basket.getAllItems().map(([itemReference, quantity]) => {
            const item = inventory.get(itemReference);
            if (!item) return null;
            const totalPrice = item.price * quantity;
            return (
              <tr key={itemReference}>
                <td>{quantity}</td>
                <td>{item.name}</td>
                <td>{item.price.toFixed(2)} €</td>
                <td>{totalPrice.toFixed(2)} €</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingBasketManager;
