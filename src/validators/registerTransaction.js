import * as yup from "yup"

export const formSchema = yup.object().shape({
    description: yup.string()
    .required("Required field")
    .min(3, "Must contain at least 3 characters")
    .max(15, "Must contain a maximum of 15 characters"),
    value: yup.string().required("Required field"),
    typeValue: yup.string().required("Required field"),
});