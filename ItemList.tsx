// ItemList.tsx
import React from 'react';
import ItemCard from './ItemCard';

type ItemListProps = {
  items: { id: number; name: string }[];
  removeItem: (id: number) => void;
  updateItem: (id: number, newName: string) => void;
};

const ItemList: React.FC<ItemListProps> = ({ items, removeItem, updateItem }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          removeItem={removeItem}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
import React from 'react';

// This component receives the props from the parent component (App.js)
function ItemList({ items, onDelete, onToggle }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} - ${item.price} {item.starred ? '⭐' : ''}
          <button onClick={() => onToggle(item.id)}>
            {item.starred ? 'Unstar' : 'Star'}
          </button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
