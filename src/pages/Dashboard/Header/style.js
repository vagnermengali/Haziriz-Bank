import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 5vw;
  display: flex;
  align-items: center;
  width: 100%;
  background: var(--white);
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  .headerContent {
    width: 63%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    img {
        width:9vw;
    }
  }
  .btnLogout {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 6vw;
    height: 2.5vw;
    background: var(--blue-2);
    border: 1.4px solid var(--blue-2);
    border-radius: 0.5vw;
    font-weight: 500;
    font-size: 1vw;
    text-align: center;
    color: var(--white);
    cursor: pointer;
    animation: fadeInDown;
    animation-duration: 0.8s;
  }
  .btnLogout:hover {
    background: var(--blue-1);
    border: 1.4px solid var(--blue-1);
    color: var(--white);
  }
  @media only screen and (max-width: 950px) {
    height: 7vw;
  .content{
    img {
        width:15vw;
    }
  }
    .btnLogout {
      width: 10vw;
      height: 4vw;
      font-size: 1.8vw;
    }
  }
  @media only screen and (max-width: 600px) {
    height: 15vw;

    .headerContent {
    width: 86%;
  }
  .content{
    img {
        width:27vw;
    }
  }
    .btnLogout {
      width: 21.1vw;
      height: 7.5vw;
      border-radius: 1vw;
      font-size: 3.5vw;
    }
}
`;
