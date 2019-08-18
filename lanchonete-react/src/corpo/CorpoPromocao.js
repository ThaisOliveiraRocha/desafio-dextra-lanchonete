import React, {Component} from 'react';

class CorpoPromocao extends Component{
  render(){
    return(
        <div className="align-self-center">
          <h1 className = "text-center">Promoções</h1>

          <table>
            <tr>
            <td className="font-weight-bold">
              Lanche Light
            </td>
            <td>Escolha um lanche com Alface e sem Bacon e ganhe 10% de desconto!</td>
          </tr>
          <tr>
            <td className="font-weight-bold">
              Muita Carne
            </td>
            <td>
              A cada 3 Hambúrgueres no lanche, o cliente leva 1 de graça!
            </td>
          </tr>
          <tr>
            <td className="font-weight-bold">
              Muito Queijo
            </td>
            <td>
              A cada 3 fatias de queijo, o cliente leva 1 de graça!
            </td>
          </tr>
          </table>
      </div>
    );
  }
}

export default CorpoPromocao;
