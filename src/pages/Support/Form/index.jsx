import {
  Form,
  Input,
  Button,
  Title,
  Textearea
} from "./style";
import "react-toastify/dist/ReactToastify.css";
import { formSchema } from "../../../validators/registerSupport";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function FormSupport() {

  const { handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <Form onSubmit={handleSubmit()}>
      <Title>Want to report a bug or make a suggestion?</Title>
      <div class="form__group field">
        <Input
          required=""
          placeholder="Name"
          class="form__field"
          type="input"
        />
        <label class="form__label" for="name">
          Name
        </label>
      </div>
      <div class="form__group field">
        <Input
          required=""
          placeholder="Name"
          class="form__field"
          type="input"
        />
        <label class="form__label" for="name">
          Email
        </label>
      </div>
      <div class="form__group field">
        <Textearea
        rows="5"
          required=""
          placeholder="Name"
          class="form__field"
          type="input"
        />
        <label class="form__label" for="name">
        Your message
        </label>
      </div>
      <Button type="submit">Send</Button>
    </Form>
  );
}

export default FormSupport;
