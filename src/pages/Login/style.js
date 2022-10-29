import styled from "styled-components";
import background from "../../assets/image/loginBackground.svg";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Img = styled.img`
  width: 50%;
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 4vw;
  width: 90%;
  margin-top:3.5vw;
`;

