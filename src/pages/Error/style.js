import styled from "styled-components";

export const ContainerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  h1 {
    color: var(--green-1);
    font-size: 4vw;
    font-weight: 800;
    line-height: 1.22;
    letter-spacing: 0;
    text-transform: none;
    text-align:center;
  }

  .link {
    display: flex;
    align-items: center;
    color: var(--blue-1);
    font-weight: bold;
    text-decoration: none;
    position: relative;
    color: var(--blue-2);

    :after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--blue-2);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    :hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  @media (max-width: 950px) {
    h1 {
    font-size: 5.5vw;
  }
  }
  @media (max-width: 600px) {
    h1 {
    font-size: 6.7vw;
  }
  }
`;
