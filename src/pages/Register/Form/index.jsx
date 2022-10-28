import {
  Form,
  Label,
  Input,
  InputError,
  Button,
  Title,
} from "./style";
import "react-toastify/dist/ReactToastify.css";
import { formSchema } from "../../../validators/userLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
    </Form>
  );
}

export default FormLogin;
