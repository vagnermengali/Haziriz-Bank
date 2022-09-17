import styled from "styled-components";

export const ContainerMain= styled.main`
      width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 2.5% 0;
    .main{
    width: 65%;
    display: flex;
    justify-content: space-around;
}
  @media (max-width: 600px) {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 4.5% 0;
    
    
    .main{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
`;
