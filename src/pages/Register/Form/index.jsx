import {
  Form,
  Div,
  LabelError,
  Button,
  Title,
  ParagraphQuestion,
  SocialMediaLinks,
  DivError,
} from "./style";
import "react-toastify/dist/ReactToastify.css";
import { formSchema } from "../../../validators/userRegister";
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
      <Title>Please Fill out form to Register!</Title>
      {errors.fullName ? (
        <DivError>
          <div class="form__group field">
            <input
              required=""
              placeholder="Name"
              class="form__field"
              type="input"
              {...register("fullName")}
            />
            <label class="form__label" for="name">
              Fullname
            </label>
          </div>
        </DivError>
      ) : (
        <Div>
          <div class="form__group field">
            <input
              required=""
              placeholder="Name"
              class="form__field"
              type="input"
              {...register("fullName")}
            />
            <label class="form__label" for="name">
              Fullname
            </label>
          </div>
        </Div>
      )}
      <LabelError>{errors.fullName?.message}</LabelError>
      {errors.userName ? (
        <DivError>
          <div class="form__group field">
            <input
              required=""
              placeholder="Name"
              class="form__field"
              type="input"
              {...register("userName")}
            />
            <label class="form__label" for="name">
              Username
            </label>
          </div>
        </DivError>
      ) : (
        <Div>
          <div class="form__group field">
            <input
              required=""
              placeholder="Name"
              class="form__field"
              type="input"
              {...register("userName")}
            />
            <label class="form__label" for="name">
              Username
            </label>
          </div>
        </Div>
      )}
      <LabelError>{errors.userName?.message}</LabelError>
      {errors.email ? (
        <DivError>
          <div class="form__group field">
            <input
              required=""
              placeholder="Name"
              class="form__field"
              type="input"
              {...register("email")}
            />
            <label class="form__label" for="name">
              Email
            </label>
          </div>
        </DivError>
      ) : (
        <Div>
          <div class="form__group field">
            <input
              required=""
              placeholder="Name"
              class="form__field"
              type="input"
              {...register("email")}
            />
            <label class="form__label" for="name">
              Email
            </label>
          </div>
        </Div>
      )}
      <LabelError>{errors.email?.message}</LabelError>
      {errors.password ? (
        <DivError>
          <div class="form__group field">
            <input
              required=""
              placeholder="Name"
              class="form__field"
              type="input"
              {...register("password")}
            />
            <label class="form__label" for="name">
              Password
            </label>
          </div>
        </DivError>
      ) : (
        <Div>
          <div class="form__group field">
            <input
              required=""
              placeholder="Name"
              class="form__field"
              type="input"
              {...register("password")}
            />
            <label class="form__label" for="name">
              Password
            </label>
          </div>
        </Div>
      )}
<LabelError>{errors.password?.message}</LabelError>
      {errors.confirmPassword ? (
        <DivError>
          <div class="form__group field">
            <input
              required=""
              placeholder="Name"
              class="form__field"
              type="input"
              {...register("confirmPassword")}
            />
            <label class="form__label" for="name">
              Confirm Password
            </label>
          </div>
        </DivError>
      ) : (
        <Div>
          <div class="form__group field">
            <input
              required=""
              placeholder="Name"
              class="form__field"
              type="input"
              {...register("confirmPassword")}
            />
            <label class="form__label" for="name">
              Confirm Password
            </label>
          </div>
        </Div>
      )}
      <LabelError>{errors.confirmPassword?.message}</LabelError>
      <Button type="submit">Register</Button>
      <ParagraphQuestion>
        Yes i have an account?{" "}
        <Link className="link" to="/login">
          Login
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
