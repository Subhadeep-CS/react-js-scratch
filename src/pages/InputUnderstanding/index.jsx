import React, { useState } from "react";

const InputUndestanding = () => {
  /**
   * document.addEventListner("click",()=>{
   * console.log();
   * })
   */

  const [formInput, setFormInputState] = useState({
    firstName: "",
    lastName: "",
  });

  const [errors, setErrors] = useState({ firstName: "", lastName: "" });

  const handleChange = (e) => {
    //grab the input id
    const { id, value } = e.target;
    setFormInputState((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    switch (id) {
      case "firstName":
        if (value.length < 6) {
          setErrors((prevError) => ({
            ...prevError,
            [id]: "First Name is too shorts",
          }));
        } else {
          setErrors((prevError) => ({
            ...prevError,
            [id]: "",
          }));
        }
        break;
      case "lastName":
        if (value.length < 6) {
          setErrors((prevError) => ({
            ...prevError,
            [id]: "lastName is too shorts",
          }));
        } else {
          setErrors((prevError) => ({
            ...prevError,
            [id]: "",
          }));
        }
        break;
      default:
        "Too many arguments";
    }
  };
  //onChange onKeyDown onKeyUp
  console.log("Error", errors);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.firstName || errors.lastName) return;
    if (errors.firstName === "" || errors.lastName === "") return;
    console.log("api submitted");
  };
  return (
    <div>
      {/* <input type="number" onChange={handleChange} value={inputValue} />
      <button onClick={handleClick}>+</button>
      <br />
      {inputValue}
      <br />
      <input type="text" onChange={handleTextChange} />
      <br />
      {inputText} */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={handleChange}
          value={formInput.firstName}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={handleChange}
          value={formInput.lastName}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
        <br />
        <button type="submit">Submit</button>
      </form>
      {formInput.firstName + " " + formInput.lastName}
    </div>
  );
};

export default InputUndestanding;
