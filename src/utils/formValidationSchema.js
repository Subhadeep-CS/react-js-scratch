import * as yup from "yup";
export const nameFormValidation = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
});
