import styled from "styled-components";

export const ContainerValue= styled.div`
    width: 100%;
    height: min-content;
    background: var(--white);
    border-radius: 0.1vw;
    margin-top: 5%;
    .contentValue {
    padding: 6% 7%;
    display: flex;
    flex-direction:column;
}
.contentValue p {
    font-weight: 400;
    font-size: 0.9vw;
    color: var(--black);
}
.valueTotal {
    display: flex;
    flex-direction:row;
    justify-content: space-between;
}
.valueTotal h1 {
    font-weight: 700;
    font-size: 1vw;
    color: var(--black);
}
.valueTotal h2 {
    font-weight: 700;
    font-size: 1vw;
    color: var(--blue-2);
}
@media only screen and (max-width:950px){
    .contentValue p {
        font-size: 1.2vw;
    }
    .valueTotal h1 {
        font-size: 1.3vw;
    }
    .valueTotal h2 {
        font-size: 1.3vw;
    }
}
@media only screen and (max-width:600px){
        border-radius: 0.5vw;
        margin-top: 3%;

    .contentValue {
        padding: 5% 6%;
    }
    .contentValue p {
        font-size: 2.9vw;
    }
    .valueTotal h1 {
        font-size: 3vw;
    }
    .valueTotal h2 {
        font-size: 3vw;
    }
}
`;