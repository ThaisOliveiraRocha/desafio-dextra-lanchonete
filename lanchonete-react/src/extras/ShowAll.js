import React, {Component} from 'react';
import '../App.css';
import Cabecalho from '../Cabecalho';
import axios from 'axios';

import '../css/bootstrap.min.css';
import '../css/playlist.css';

class ShowAll extends Component{
  constructor(){
    super();
    this.state = {
      lanches : []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080")
      .then(response =>response.data)
      .then((data) => {
        this.setState({
          lanches : data,
        });
      })
      .catch(error => this.setState({ error}));
  }

  render(){
    var lancheItem = this.state.lanches.map((lanche, i) => {
      return(
          <tr>
            <td>{lanche.name}</td>
            <td>R$ {lanche.preco}</td>
          </tr>
      )
    })
    return(
      <div>
        <Cabecalho />

          <div className="container">
            <div className="table table-striped table-hover">
              <h1>Todos os Pedidos</h1>
              <table>
                <thead class="thread-dark">
                  <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                  </tr>
                </thead>
                <tbody>
                  {lancheItem}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
  }
}

export default ShowAll;
