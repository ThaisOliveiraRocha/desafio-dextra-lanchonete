import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './imagens/icon.png';
import './App.css';

import './css/bootstrap.min.css';
import './css/playlist.css';

class Cabecalho extends Component{
  render(){
    return(
      <header className="App-header">
        <div class="d-flex align-items-center mb-3">
            <div class="p-2 bd-highlight">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div class="p-2 bd-highlight">
              <h1 className="App-title">Lancho[net]</h1>
            </div>
            <div class="ml-auto p-2 bd-highlight">
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-danger" ><Link to="/" style={{color: 'white'}}>Home</Link></button>
                <button type="button" className="btn btn-danger"><Link to="/ShowAll" style={{color: 'white'}}>Listar Itens</Link></button>
                <button type="button" className="btn btn-danger"><Link to="/DeleteById" style={{color: 'white'}}>Excluir</Link></button>
              </div>
            </div>
        </div>
      </header>

    );
  }
}

export default Cabecalho;
