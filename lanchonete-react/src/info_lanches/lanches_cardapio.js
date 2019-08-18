import React, {Component} from 'react';

import '../css/bootstrap.min.css';
import '../css/playlist.css';

const preco_alface = 0.40;
const preco_bacon = 2.00;
const preco_hamburguer = 3.00;
const preco_ovo = 0.80;
const preco_queijo = 1.50;

const preco_xbacon = preco_bacon + preco_hamburguer + preco_queijo;
const preco_xburger = preco_hamburguer + preco_queijo;
const preco_xegg = preco_hamburguer + preco_queijo + preco_ovo;
const preco_xeggbacon = preco_bacon + preco_hamburguer + preco_ovo + preco_queijo;

class LanchesCardapio extends Component{
  render(){
    return(
      <div>
        <h1>Cardápio</h1>
        <table>
          <thead class="thread-dark">
            <tr>
              <th>Lanche</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>X-Bacon</td>
              <td>R$ {preco_xbacon}</td>
            </tr>
            <tr>
              <td>X-Buger</td>
              <td>R$ {preco_xburger}</td>
            </tr>
            <tr>
              <td>X-Egg</td>
              <td>R$ {preco_xegg}</td>
            </tr>
            <tr>
              <td>X-Egg Bacon</td>
              <td>R$ {preco_xeggbacon}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default LanchesCardapio;
