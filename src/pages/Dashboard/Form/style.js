import styled from "styled-components";

export const ContainerForm = styled.section`
  width: 36%;

  @media (max-width: 600px) {
    width: 85%;
    display: flex;
    flex-direction: column;
  }
`;

export const FormDashboard = styled.form`
     display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: min-content;
    background: var(--white);
    border-radius: 0.5%;
    padding: 8% 6%;

    .divDescription p{
    font-weight: 500;
    font-size: 0.8vw;
    color: var(--blue-1);
    margin-bottom: 6%;
}
.divDescription {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.labelDescription {
    display:flex;
    flex-direction:column;
    font-weight: 400;
    font-size: 0.8vw;
    gap:1.5px;
    color: var(--black);
    margin-bottom: 1%;
}
.labelDescription span{
    height: 0.8vw;
    font-weight: 400;
    font-size: 0.8vw;
    color: var(--red-1);
}
.inputDescription {
    width: 100%;
    font-weight: 400;
    font-size: 1.1vw;
    color: var(--grey-1);
    box-sizing: border-box;
    padding: 4%;
    background: var(--grey-0);
    border: 0.15vw solid var(--grey-0);
    border-radius: 0.5vw;
    margin-bottom: 1%;
    :focus {
    outline: 2px solid var(--blue-1);
   }
}
.inputDescriptionError {
    width: 100%;
    font-weight: 400;
    font-size: 1.1vw;
    color: var(--grey-1);
    box-sizing: border-box;
    padding: 4%;
    background: var(--grey-0);
    border: 0.15vw solid var(--grey-0);
    border-radius: 0.5vw;
    margin-bottom: 1%;
    outline: 2px solid var(--red-1);
}
.divValue {
    width: 100%;
    display: flex;
  justify-content: space-between;

}
.divContentOne {
   width: 45%; 
   display: flex;
   flex-direction: column;
   margin-bottom: 6%;
}
.divContentOne label {
    display:flex;
    flex-direction:column;
    font-weight: 400;
    font-size: 0.8vw;
    gap:1.5px;
    color: var(--black);
    margin-bottom: 1%;
}
.divContentOne label span{
    height: 0.8vw;
    font-weight: 400;
    font-size: 0.8vw;
    color: var(--red-1);
}
.divContentTwo {
    width: 45%; 
    display: flex;
    flex-direction: column;
    margin-bottom: 6%;
 }
 .divContentTwo label {
    display:flex;
    flex-direction:column;
    font-weight: 400;
    font-size: 0.8vw;
    gap:1.5px;
    color: var(--black);
    margin-bottom: 1%;
}
.divContentTwo label span{
    height: 0.8vw;
    font-weight: 400;
    font-size: 0.8vw;
    color: var(--red-1);
}
.selectValue {
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 1.1vw;
    box-sizing: border-box;
    padding: 8%;
    background: var(--grey-0);
    border: 0.15vw solid var(--grey-0);
    border-radius: 0.5vw;
    color: var(--grey-1);
    :focus {
    outline: 2px solid var(--blue-1);
   }
}
.selectValueError {
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 1.1vw;
    box-sizing: border-box;
    padding: 8%;
    background: var(--grey-0);
    border: 0.15vw solid var(--grey-0);
    border-radius: 0.5vw;
    color: var(--grey-1);
    outline: 2px solid var(--red-1);
}
.inputValue {
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 1.1vw;
    box-sizing: border-box;
    padding: 8%;
    background: var(--grey-0);
    border: 0.15vw solid var(--grey-0);
    border-radius: 0.5vw;
    color: var(--grey-1);
   :focus {
    outline: 2px solid var(--blue-1);
   }
}
.inputValueError {
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 1.1vw;
    box-sizing: border-box;
    padding: 8%;
    background: var(--grey-0);
    border: 0.15vw solid var(--grey-0);
    border-radius: 0.5vw;
    color: var(--grey-1);
    outline: 2px solid var(--red-1);
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"] {
    -moz-appearance: textfield;
}
.inputValue::placeholder {
    padding-left: 80%;
    color: var(--blue-1);
}
.inputValueError::placeholder {
    padding-left: 80%;
    color: var(--blue-1);
}
.insertValue {
    font-style: normal;
    font-weight: 500;
    font-size: 1vw;
    color: var(--white);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4% 9%;
    width: 100%;
    height: 9%;
    background: var(--blue-2);
    border: 0.1vw solid var(--blue-2);
    border-radius: 0.4vw;
    cursor: pointer;
}
.insertValue:hover{
    color: var(--white);
    background: var(--blue-1);
    border: 0.1vw solid var(--blue-1);
}
@media(max-width: 950px) {
    .divDescription p{
        font-size: 1.1vw;
    }
    .labelDescription {
        font-size: 1.1vw;
    }
    .labelDescription span{
        height: 1.1vw;
        font-size: 1.1vw;
    }
    .inputDescription {
        font-size: 1.3vw;
    }
    .inputDescriptionError {
        font-size: 1.3vw;
    }
    .divContentOne label {
        font-size: 1.1vw;
    }
    .divContentOne label span{
        height: 1.1vw;
        font-size: 1.1vw;
    }
    .divContentTwo label {
        font-size: 1.1vw;
    }
    .divContentTwo label span{
        height: 1.1vw;
        font-size: 1.1vw;
    }
    .selectValue {
        font-size: 1.3vw;
    }
    .selectValueError {
        font-size: 1.3vw;
}
    .inputValue {
        font-size: 1.3vw;
    }
    .inputValueError{
        font-size: 1.3vw;
}
    .inputValue::placeholder {
        padding-left: 75%;
    }
    .inputValueError::placeholder {
        padding-left: 75%;
    }
    .insertValue {
        font-size: 1.2vw;
    }
    }
  @media (max-width: 600px) {
    width: 100%;
    border: 0.1vw solid var(--grey-2);
    border-radius: 1.5%;
    padding: 8% 6%;

    .divDescription p{
    font-size: 2.8vw;
    margin-bottom: 6%;
}
.divDescription {
    width: 100%;
}
.labelDescription {
    font-size: 2.8vw;
  
}
.labelDescription span{
    height: 2.8vw;
    border-radius: 1.5vw;
    font-size: 2.8vw;
}
.inputDescription {
    font-size: 3.1vw;
    padding: 5%;
}
.inputDescriptionError {
    font-size: 3.1vw;
    padding: 5%;
}
.divValue {
    width: 100%;
}
.divContentOne {
   width: 45%; 
   margin-bottom: 6%;
}
.divContentTwo {
    width: 45%; 
    margin-bottom: 6%;
 }
.divContentOne label {
    width: 100%;
    font-size: 2.8vw;
    margin-bottom: 1%;
}
.divContentOne label span{
    height: 2.8vw;
    font-size: 2.8vw;
}
.divContentTwo label {
    font-size: 2.8vw;
}
.divContentTwo label span{
    height: 2.8vw;
    font-size: 2.8vw;
}
.selectValueError {
    font-size: 3.1vw;
    padding: 10%;
}
.selectValue {
    font-size: 3.1vw;
    padding: 10%;
}
.inputValue {
    font-size: 3.1vw;
    padding: 10%;
}
.inputValueError{
    font-size: 3.1vw;
    padding: 10%;
}
.insertValue {
    font-size: 3vw;
    height: 19%;
    border-radius: 0.8vw;
}
.insertValue:hover{
    border: 0.1vw solid var(--color-primary-2);
}
  }
`;
