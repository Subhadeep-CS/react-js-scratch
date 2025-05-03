import React, { useState } from "react";

const InputUndestanding = () => {
  /**
   * document.addEventListner("click",()=>{
   * console.log();
   * })
   */
  const [inputValue, setInputValue] = useState(0);
  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setInputValue((prevInput) => Number(prevInput) + 1);
  };
  return (
    <div>
      <input type="number" onChange={handleChange} value={inputValue} />
      <button onClick={handleClick}>+</button>
      <br />
      {inputValue}
    </div>
  );
};

export default InputUndestanding;
