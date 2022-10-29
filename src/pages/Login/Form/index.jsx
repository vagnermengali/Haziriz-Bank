import {
  Form,
  Input,
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
import { useContext } from "react";
import { Context } from "../../../providers/userContext";

function FormLogin() {
  const {
    handleChangeDisableEmail,
    handleChangeDisablePassword,
    isDisableEmail,
    isDisablePassword,
  } = useContext(Context);

  const { handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <Form onSubmit={handleSubmit()}>
      <Title>Welcome Back!</Title>
      <div class="form__group field">
        <Input
          required=""
          placeholder="Name"
          class="form__field"
          type="input"
          onChange={(e) => handleChangeDisableEmail(e.target.value)}
        />
        <label class="form__label" for="name">
          Email
        </label>
      </div>
      <div class="form__group field">
        <Input
          required=""
          placeholder="Name"
          class="form__field"
          type="input"
          onChange={(e) => handleChangeDisablePassword(e.target.value)}
        />
        <label class="form__label" for="name">
          Password
        </label>
      </div>
      {isDisableEmail && isDisablePassword ? (
        <Button type="submit" disabled={false}>
          Log in
        </Button>
      ) : (
        <Button type="submit" disabled={true}>
          Log in
        </Button>
      )}
      <ParagraphQuestion>
        Dont have and account?{" "}
        <Link className="link" to="/register">
          Register
        </Link>
      </ParagraphQuestion>
      <SocialMediaLinks>
        <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=CllgCKCJDZCBxkTLWFmlgChSlzCcJghwQDjLqFLWPVSgmSCgZqxHmxLlBjBwqdbfnsQbdQTtzLB">
          <FaGoogle className="iconGoogle" />
        </a>
        <a href="https://www.linkedin.com/in/vagnermengali/">
          <FaLinkedinIn className="iconLinkedin" />
        </a>
        <a href="https://ms-my.facebook.com/vagner.mengali.9">
          <FaFacebookF className="iconFacebook" />
        </a>
      </SocialMediaLinks>
    </Form>
  );
}

export default FormLogin;
