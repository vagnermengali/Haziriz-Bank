import { ContainerValue } from "./style";

function TotalMoney() {
 
    return (
      <ContainerValue>
        <div className="contentValue">
          <div className="valueTotal">
            <h1>Valor total:</h1>
            <h2>$ 1000</h2>
          </div>
          <p className="paragraph">O valor se refere ao saldo</p>
        </div>
      </ContainerValue>
    );
}

export default TotalMoney;
