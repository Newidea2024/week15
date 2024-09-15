import React, { useState } from 'react';

type SidebarProps = {
  addItem: (name: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="sidebar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item name"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Sidebar;
