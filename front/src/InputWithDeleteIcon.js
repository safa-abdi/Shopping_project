import React, { useState } from 'react';

const InputWithDeleteIcon = () => {
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(true);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteClick = () => {
    setInputValue('');
    setShowInput(false);
  };

  const handleInputBlur = () => {
    if (!inputValue) {
      setShowInput(false);
    }
  };

  return (
    <div className="input-container">
      {showInput && (
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleInputBlur}
        />
      )}
      {inputValue && showInput && (
        <span className="delete-icon" onClick={handleDeleteClick}>
          &#10006;
        </span>
      )}
    </div>
  );
};

export default InputWithDeleteIcon;

