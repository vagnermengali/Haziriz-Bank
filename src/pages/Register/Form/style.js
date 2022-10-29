import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.3vw;
  line-height: 2vw;
  color: var(--black);
  text-align: center;
`;
export const Div = styled.div`
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

.form__field:focus {
  padding-bottom: 6px;
  border-width: 3px;
  border-image: linear-gradient(to right, var(--golden-1), var(--golden-2));
  border-image-slice: 1;
}

.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  color: var(--golden-2);
  font-weight: 700;
}

.form__field:required, .form__field:invalid {
  box-shadow: none;
}
`;
export const DivError = styled.div`
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

.form__field:focus {
  padding-bottom: 6px;
  border-width: 3px;
  border-image: linear-gradient(to right, var(--red-1), var(--red-2));
  border-image-slice: 1;
}

.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  color: var(--red-1);
  font-weight: 700;
}

.form__field:required, .form__field:invalid {
  box-shadow: none;
}
`;
export const LabelError = styled.label`
    height: 0.5vw;
    font-weight: 400;
    font-size: 0.8vw;
    color: var(--red-1);
`;
export const InputError = styled.input`
  width: 99%;
  font-weight: 400;
  font-size: 1.1vw;
  color: var(--grey-1);
  box-sizing: border-box;
  padding: 3.2%;
  background: var(--beige-1);
  border: 0.15vw solid var(--grey-0);
  border-radius: 0.5vw;
  outline: 2px solid var(--red-1);
`;
export const Button = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  text-transform: uppercase;
  color: var(--golden-1);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4% 9%;
  width: 100%;
  height: 9%;
  background: var(--black-2);
  border: 0.15vw solid var(--black-2);
  border-radius: 0.5vw;
  cursor: pointer;
  margin-top:0.5vw;

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
  gap: 0.5vw;

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
`;
export const ParagraphQuestion = styled.p`
  width: 100%;
  font-weight: 600;
  font-size: 0.9vw;
  color: var(--gray-1);
  text-align: center;
  margin-top: 0.8vw;
`;
export const SocialMediaLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 0.9vw;
  text-align: center;
  margin-top: 0.5vw;

  .iconGoogle {
    width: 3vw;
    height: 1.1vw;
    color: var(--black-1);
  }
  .iconGoogle:hover {
    color: var(--golden-1);
  }
  .iconLinkedin {
    width: 3.5vw;
    height: 1.3vw;
    color: var(--black-1);
  }
  .iconLinkedin:hover {
    color: var(--golden-1);
  }
  .iconFacebook {
    width: 3vw;
    height: 1.1vw;
    color: var(--black-1);
  }
  .iconFacebook:hover {
    color: var(--golden-1);
  }
`;
