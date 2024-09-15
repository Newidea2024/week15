// ItemCard.tsx
import React, { useState } from 'react';

type ItemCardProps = {
  item: { id: number; name: string };
  removeItem: (id: number) => void;
  updateItem: (id: number, newName: string) => void;
};

const ItemCard: React.FC<ItemCardProps> = ({ item, removeItem, updateItem }) => {
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState(item.name);

  const handleUpdate = () => {
    if (newName.trim()) {
      updateItem(item.id, newName);
      setEditMode(false);
    }
  };

  return (
    <div className="item-card">
      {editMode ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{item.name}</h3>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
};

export default ItemCard;
