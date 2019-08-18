import React, {Component} from 'react';
import IngredientesDisponiveis from '../info_lanches/ingredientes_disponiveis';

import '../css/bootstrap.min.css';
import '../css/playlist.css';

class CorpoPersonalizarLanche extends Component{
  carregarPersonalizarPage(event){
    event.preventDefault();
    window.location.href="http://localhost:3000/Personalizar";
  }

  render(){
    return(
      <main className="contentMain">
        <div className="container">
          <div className="table table-striped table-hover">
            <IngredientesDisponiveis />

            <button type="button" className="btn btn-success" id="proximoPersonalizar" onClick={this.carregarPersonalizarPage.bind(this)}>
              Realizar Pedido
            </button>
          </div>
        </div>
      </main>
    );
  }
}


export default CorpoPersonalizarLanche;
