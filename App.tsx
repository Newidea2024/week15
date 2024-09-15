// App.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ItemList from './ItemList';

const App: React.FC = () => {
  const [items, setItems] = useState<{ id: number; name: string }[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  // Function to add an item
  const addItem = (itemName: string) => {
    const newItem = { id: items.length + 1, name: itemName };
    setItems([...items, newItem]);
  };

  // Function to remove an item
  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Function to update an item
  const updateItem = (id: number, newName: string) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  return (
    <div className="app-container">
      <Sidebar addItem={addItem} />
      {/* Passing items, removeItem, and updateItem as props */}
      <ItemList items={items} removeItem={removeItem} updateItem={updateItem} />
    </div>
  );
};

export default App;
import React, { useState } from 'react';

// If you have a separate ItemList.js, import it here
// import ItemList from './ItemList';

const TEST_DATA = [
  { id: 1, name: 'Item 1', price: 100, starred: false },
  { id: 2, name: 'Item 2', price: 200, starred: false },
  { id: 3, name: 'Item 3', price: 300, starred: false }
];

function App() {
  const [list, setList] = useState(TEST_DATA);

  // Add Item Function
  const addItem = () => {
    const newItem = { id: list.length + 1, name: 'New Item', price: 400, starred: false };
    setList([...list, newItem]);
  };

  // Delete Item Function
  const deleteItem = (id) => {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  };

  // Toggle Starred Function
  const toggleStarred = (id) => {
    const updatedList = list.map(item =>
      item.id === id ? { ...item, starred: !item.starred } : item
    );
    setList(updatedList);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <button onClick={addItem}>Add New Item</button>
      <ItemList items={list} onDelete={deleteItem} onToggle={toggleStarred} /> {/* Pass props */}
    </div>
  );
}

export default App;
