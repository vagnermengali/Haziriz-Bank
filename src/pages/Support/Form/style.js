import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.3vw;
  line-height: 2vw;
  color: var(--black);
  text-align: center;
`;
export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--black-1);
  outline: 0;
  font-size: 17px;
  color: var(--grey-1);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  ::placeholder {
    color: transparent;
  }

  :placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }

  :focus {
    padding-bottom: 6px;
    border-width: 3px;
    border-image: linear-gradient(to right, var(--golden-1), var(--golden-2));
    border-image-slice: 1;
  }

  :focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    color: var(--golden-2);
    font-weight: 700;
  }

  :required,
  :invalid {
    box-shadow: none;
  }
`;
export const Textearea = styled.textarea`
  font-family: inherit;
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--black-1);
  outline: 0;
  font-size: 17px;
  color: var(--grey-1);
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  ::placeholder {
    color: transparent;
  }

  :placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }

  :focus {
    padding-bottom: 6px;
    border-width: 3px;
    border-image: linear-gradient(to right, var(--golden-1), var(--golden-2));
    border-image-slice: 1;
  }

  :focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    color: var(--golden-2);
    font-weight: 700;
  }

  :required,
  :invalid {
    box-shadow: none;
  }
`;
export const Button = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  text-transform: uppercase;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4% 9%;
  width: 100%;
  height: 9%;

  color: var(--golden-1);
  background: var(--black-2);
  border: 0.15vw solid var(--black-2);
  cursor: pointer;

  :hover {
    background: var(--black);
    color: var(--golden-2);
    border: 0.15vw solid var(--black);
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 40%;
  height: min-content;
  padding: 0 6%;
  gap: 0.8vw;

  .divDescription {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .link {
    text-decoration: none;
    color: var(--golden-1);
  }
  .link:hover {
    color: var(--golden-2);
  }

  .form__group {
    position: relative;
    padding: 20px 0 0;
    margin-top: 10px;
    width: 100%;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid var(--black-1);
    outline: 0;
    font-size: 17px;
    color: var(--grey-1);
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;

    color: var(--black-1);
    pointer-events: none;
  }
`;
