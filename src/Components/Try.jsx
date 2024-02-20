import React, { useState } from 'react';
import './Try.css';

const Try = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Toggle Dropdown</button>

      {isOpen && (
        <div className="dropdown-content">
          <button>Dropdown Item 1</button><br></br>
          <button>Dropdown Item 2</button><br></br>
          <button>Dropdown Item 3</button>
        </div>
      )}
    </div>
  );
};

export default Try;

