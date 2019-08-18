import React, {Component} from 'react';
import './App.css';
import Cabecalho from './Cabecalho';
import CorpoCardapio from './corpo/CorpoCardapio';
import CorpoPromocao from './corpo/CorpoPromocao';
import CorpoPersonalizarLanche from './corpo/CorpoPersonalizarLanche';

import './css/bootstrap.min.css';
import './css/playlist.css';

class Home extends Component{
  render(){
    return(
      <div>
        <Cabecalho />
        <main className="d-flex justify-content-around">
          <div className="float-left">
            <CorpoCardapio />
          </div>
          <div className="float-right">
            <CorpoPersonalizarLanche />
          </div>
          <div className="align-self-center">
            <CorpoPromocao />
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
