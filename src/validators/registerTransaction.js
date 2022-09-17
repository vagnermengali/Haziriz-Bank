import * as yup from "yup"

export const formSchema = yup.object().shape({
    description: yup.string()
    .required("Required field")
    .min(3, "Must contain at least 3 characters")
    .max(15, "Must contain a maximum of 15 characters"),
    value: yup.string().required("Required field")
    .max(10, "Maximum of 10 characterss"),
    typeValue: yup.string().required("Required field"),
});