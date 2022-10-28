import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 5vw;
  z-index:999999;
  top:0;
  position:absolute;
  display: flex;
  align-items: center;
  width: 100%;
  background: var(--white);
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;

  .headerContent {
    width: 85%;
  }
  .content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 9vw;
    }
    nav {
      display: flex;
      gap: 4.7vw;
    }
    .link {
      text-decoration: none;
      color: var(--black);
    }
    .link:hover {
      color: var(--golden-1);
    }
  }
`;
