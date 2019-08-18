import React, {Component} from 'react';
import LanchesCardapio from '../info_lanches/lanches_cardapio';

import '../css/bootstrap.min.css';
import '../css/playlist.css';

class CorpoCardapio extends Component{

  carregarCardapioPage(event){
    event.preventDefault();
    window.location.href="http://localhost:3000/Cardapio";
  }

  render(){
    return(
      <div className="container">
        <div className="table table-striped table-hover">
          <LanchesCardapio />

          <button type="button" className="btn btn-success" id="proximoCardapio" onClick={this.carregarCardapioPage.bind(this)}>
            Realizar Pedido
          </button>
        </div>
      </div>
    );
  }
}

export default CorpoCardapio;
