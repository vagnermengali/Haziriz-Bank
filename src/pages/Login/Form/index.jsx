import {
  Form,
  Label,
  Input,
  InputError,
  Button,
  Title,
  ParagraphQuestion,
  SocialMediaLinks,
} from "./style";
import "react-toastify/dist/ReactToastify.css";
import { formSchema } from "../../../validators/userLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";

function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <Form onSubmit={handleSubmit()}>
      <Title>Welcome Back!</Title>
      <Label>
        Email<span>{errors.email?.message}</span>
      </Label>
      <div className="divDescription">
        {errors.email ? (
          <InputError
            type="text"
            placeholder="name@example.com"
            {...register("email")}
          />
        ) : (
          <Input
            type="text"
            placeholder="name@example.com"
            {...register("email")}
          />
        )}
      </div>
      <Label>
        Password<span>{errors.password?.message}</span>
      </Label>
      <div className="divDescription">
        {errors.password ? (
          <InputError
            type="text"
            placeholder="password"
            {...register("password")}
          />
        ) : (
          <Input type="text" placeholder="password" {...register("password")} />
        )}
      </div>
      <Button type="submit">Log in</Button>
      <ParagraphQuestion>
        Dont have and account?{" "}
        <Link className="link" to="/register">
          Register
        </Link>
      </ParagraphQuestion>
      <SocialMediaLinks>
        <Link
          
          src="https://github.com/vagnermengali/Haziriz-Bank"
        >
          <FaGoogle className="iconGoogle"/>
        </Link>
        <Link
          
          src="https://github.com/vagnermengali/Haziriz-Bank"
        >
          <FaLinkedinIn className="iconLinkedin"/>
        </Link>
        <Link
          
          src="https://github.com/vagnermengali/Haziriz-Bank"
        >
          <FaFacebookF className="iconFacebook"/>
        </Link>
      </SocialMediaLinks>
    </Form>
  );
}

export default FormLogin;
