import React, {Component} from 'react';
import Cabecalho from '../Cabecalho';
import '../App.css';
import axios from 'axios';

class ShowAll extends Component{
  constructor(){
    super();
    this.state = {
      lanches : []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8080")
      .then(response =>response.data)
      .then((data) => {
        this.setState({
          lanches : data,
        });
      })
      .catch(error => this.setState({ error}));
  }

  deleteById(){
    axios.delete(`http://localhost:8080/${this.refs.id.value}`)
    .then(res => {
      alert("Item excluído com sucesso!");
      window.location.href="http://localhost:3000/";
    }).catch(err=> console.log(err));
  }

  onAddSubmit(event){
    event.preventDefault();
    this.deleteById();
  }

  render(){
    var lancheItem = this.state.lanches.map((lanche, i) => {
      return(
          <tr>
            <td>{lanche.id}</td>
            <td>{lanche.name}</td>
            <td>R$ {lanche.preco}</td>
          </tr>
      )
    })
    return(
      <div>
        <Cabecalho />

        <div  className="d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <div className="container">
              <div className="table table-striped table-hover">
                <h1>Todos os Pedidos</h1>
                <table>
                  <thead class="thread-dark">
                    <tr>
                      <th>Id</th>
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
          <div class="d-flex align-items-center">
            <form onSubmit={this.onAddSubmit.bind(this)}>
              <div class="d-flex justify-content-around">
                <input type="text" name="id" ref="id" placeholder="Informe o Id"/>
                <input type="submit" className="btn btn-success" name="excluir" value="Excluir" />
              </div>
            </form>
          </div>
      </div>
    </div>
    );
  }
}

export default ShowAll;
