import React, { useState } from 'react';

function Menu({ onOpen, onClosed }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (isOpen) {
      onClosed();
    } else {
      onOpen();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      {isOpen && (
        <div className="menu">
          <p>Menu Content</p>
        </div>
      )}
    </div>
  );
}

export default Menu;