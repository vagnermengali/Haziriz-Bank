import *  as  yup from "yup"

export const formSchema = yup.object().shape({
    name: yup.string()
    .required("Required field")
    .min(3, "Password must be at least 3 characters long")
    .matches(("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\\s]+$"),"The name must contain only letters"),

    email: yup.string()
    .required("Required field")
    .email("Invalid email")
    .matches(("^[a-z0-9\\_.]+@[a-z]+.([a-z]+)$"),"Check your email"),

    password: yup.string()
    .required("Required field")
    .max(30, "Must contain a maximum of 30 digits")
    .matches(/[A-Z]/, "Must contain at least 1 capital letter")
    .matches(/([a-z])/, "Must contain at least 1 lowercase letter")
    .matches(/(\d)/, "Must contain at least 1 number")
    .matches(/(\W)|_/, "Must contain at least 1 special character")
    .matches(/.{8,}/, "Must contain at least 8 digits"),

    confirmPassword: yup.string()
    .required("Required field")
    .oneOf([yup.ref('password'), null],"Passwords do not match"),

  });