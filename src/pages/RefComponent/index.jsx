import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { nameFormValidation } from "../../utils/formValidationSchema";
const RefComponent = () => {
  const mainDevRef = useRef(null);
  const inputRef = useRef(null);
  // const [step, setStep] = useState(0);
  // const mainDiv = document.getElementById("main-div");
  // console.log(mainDiv);
  console.log(mainDevRef);

  const handleMainDivClick = () => {
    console.log(mainDevRef);

    const mainDiv = document.getElementById("main-div");
    console.dir(mainDiv);

    // setStep((step) => step++);

    inputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    // inputRef.current.focus();
    const mainDiv = document.getElementById("main-div");
    mainDiv.focus();
  }, []);

  const {
    register,
    handleSubmit: handleFormSubmit,
    reset,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   firstName: "Subhadeep",
    //   lastName: "Das",
    // },
    resolver: yupResolver(nameFormValidation),
  });
  console.log(errors);
  const nameSubmit = (values) => {
    console.log(values);
    reset();
  };
  return (
    <>
      <button id="main-div" ref={mainDevRef} onClick={handleMainDivClick}>
        RefComponent
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
      <form onSubmit={handleFormSubmit(nameSubmit)}>
        <input
          type="text"
          placeholder="first name"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}
        <br />
        <input type="text" placeholder="last name" {...register("lastName")} />
        {errors.lastName && (
          <p style={{ color: "red" }}>{errors.lastName.message}</p>
        )}
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default RefComponent;
