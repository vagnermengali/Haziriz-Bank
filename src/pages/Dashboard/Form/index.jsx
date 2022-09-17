import { ContainerForm, FormDashboard } from "./style";
import TotalMoney from "../TotalMoney";
import { formSchema } from "../../../validators/registerTransaction";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function Form({ listTransactions, setlistTransactions }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <ContainerForm>
      <FormDashboard onSubmit={handleSubmit()}>
        <div className="divDescription">
          <label className="labelDescription">
            Description<span>{errors.description?.message}</span>
          </label>
          {errors.description ? (
            <input
              className="inputDescriptionError"
              type="text"
              placeholder="Enter your description"
              {...register("description")}
            />
          ) : (
            <input
              className="inputDescription"
              type="text"
              placeholder="Enter your description"
              {...register("description")}
            />
          )}
          <p>Example: Buying clothes</p>
        </div>
        <div className="divValue">
          <div className="divContentOne">
            <label className="labelValue">
              Value<span>{errors.value?.message}</span>
            </label>
            {errors.value ? (
              <input
                className="inputValueError"
                type="number"
                placeholder="R$"
                {...register("value")}
              />
            ) : (
              <input
                className="inputValue"
                type="number"
                placeholder="R$"
                {...register("value")}
              />
            )}
          </div>
          <div className="divContentTwo">
            <label>
              Value type<span>{errors.typeValue?.message}</span>
            </label>
            {errors.typeValue ? (
              <select
                name="typeValue"
                placeholder="Selecione"
                className="selectValueError"
                {...register("typeValue")}
              >
                <option value="">Select</option>
                <option value="Entrada">Entry</option>
                <option value="Despesa">Exit</option>
              </select>
            ) : (
              <select
                name="typeValue"
                placeholder="Selecione"
                className="selectValue"
                {...register("typeValue")}
              >
                <option value="">Select</option>
                <option value="Entrada">Entry</option>
                <option value="Despesa">Exit</option>
              </select>
            )}
          </div>
        </div>
        <button type="submit" className="insertValue">
          Insert Value
        </button>
      </FormDashboard>
      <TotalMoney />
    </ContainerForm>
  );
}

export default Form;
