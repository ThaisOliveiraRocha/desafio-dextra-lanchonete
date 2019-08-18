import React, {Component} from 'react';

import '../css/bootstrap.min.css';
import '../css/playlist.css';

  const preco_alface = 0.40;
  const preco_bacon = 2.00;
  const preco_hamburguer = 3.00;
  const preco_ovo = 0.80;
  const preco_queijo = 1.50;

class IngredientesDisponiveis extends Component{
  render(){
    return(
      <div>
        <h1>Personalizar Lanche</h1>

      <table>
        <thead class="thread-dark">
          <tr>
            <th>Ingredientes Disponiveis</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Alface
            </td>
            <td>
              R$ {preco_alface}
            </td>
          </tr>
          <tr>
            <td>
              Bacon
            </td>
            <td>
              R$ {preco_bacon}
            </td>
          </tr>
          <tr>
            <td>
              Hambúrguer de Carne
            </td>
            <td>
              R$ {preco_hamburguer}
            </td>
          </tr>
          <tr>
            <td>
              Ovo
            </td>
            <td>
              R$ {preco_ovo}
            </td>
          </tr>
          <tr>
            <td>
              Queijo
            </td>
            <td>
              R$ {preco_queijo}
            </td>
          </tr>
        </tbody>
      </table>

      </div>
    )
  }
}

export default IngredientesDisponiveis;
