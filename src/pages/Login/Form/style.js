import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5vw;
  line-height: 2vw;
  color: var(--black);
  text-align: center;
  margin-bottom: 1vw;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 1.1vw;
  gap: 1.5px;
  color: var(--black);

  span {
    height: 0.5vw;
    font-weight: 400;
    font-size: 0.8vw;
    color: var(--red-1);
  }
`;
export const Input = styled.input`
  width: 99%;
  font-weight: 400;
  font-size: 1.1vw;
  color: var(--grey-1);
  box-sizing: border-box;
  padding: 3.2%;
  background: var(--grey-6);
  border: 0.15vw solid var(--grey-0);
  border-radius: 0.5vw;

  outline: 2px solid var(--black);
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
  gap: 1vw;

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
  line-height: 1.1vw;
  color: var(--gray-1);
  text-align: center;
  margin-top: 1vw;
`;
export const SocialMediaLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 0.9vw;
  line-height: 1.1vw;
  text-align: center;
  margin-top: 1vw;

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
