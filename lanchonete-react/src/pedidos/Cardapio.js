import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import Cabecalho from '../Cabecalho';
import LanchesCardapio from '../info_lanches/lanches_cardapio';

import '../css/bootstrap.min.css';
import '../css/playlist.css';

class Cardapio extends Component{
  constructor(props){
    super(props);
    this.state = {
      lanches : [],
      isLoading: true,
      errors: null,
      isGoing: true
    }

    this.handleChecked = this.handleChecked.bind(this);
  }

  carregarHome(event){
    event.preventDefault();
    window.location.href="http://localhost:3000/";
  }

  handleChecked () {
    this.setState({isChecked: !this.state.isChecked});
  }

  addLanche(){
    axios.post("http://localhost:8080", {
      "name": this.refs.lanche.value,
      "menu": this.refs.menu.name,
      "muita_carne" : this.refs.promo_carne.value,
      "muito_queijo" : this.refs.promo_queijo.value,
    })
    .then(res => {
      alert("Compra finalizada no valor de R$ "+res.data.preco);
      window.location.href="http://localhost:3000/";
    }).catch(err=> console.log(err));
  }

  onAddSubmit(event){
    event.preventDefault();
    this.addLanche();
  }

  render(){
    return(
      <div>

      <Cabecalho />

      <main>
        <div className="container">

          <div  className="d-flex justify-content-center">
            <div className="table table-striped table-hover">
              <LanchesCardapio/>
            </div>
            <form onSubmit={this.onAddSubmit.bind(this)}>

                <input type="hidden" id="true" name="true" value="true" ref="menu" />

                <label className="font-weight-bold"> Selecione  o lanche desejado: </label><br/>
                  <select name="lanche" ref="lanche">
                    <option value = "X-Bacon">X-Bacon</option>
                    <option value = "X-Burger">X-Burger</option>
                    <option value = "X-Egg">X-Egg</option>
                    <option value = "X-Egg Bacon">X-Egg Bacon</option>
                  </select>

                <h2 >Promoções</h2>
                <p className="font-weight-bold">Promoção Leve 3 pague 2!</p>
                <p>A cada três hambúrgueres de carne e/ou fatias de queijo adicionadas ao pedido, você só paga 2!</p>
                  <div class="d-flex bd-highlight">
                    <div class="p-2 bd-highlight">
                      <label>Muita Carne: </label>
                    </div>
                    <div class="p-2 flex-shrink-1 bd-highlight">
                      <select name="muita_carne" ref="promo_carne">
                        <option value = "0"></option>
                        <option value = "3">3</option>
                        <option value = "6">6</option>
                        <option value = "9">9</option>
                        <option value = "12">12</option>
                        <option value = "15">15</option>
                      </select>
                    </div>
                  </div>

                  <div class="d-flex bd-highlight">
                    <div class="p-2 bd-highlight">
                      <label>Muito Queijo: </label>
                    </div>
                    <div class="p-2 flex-shrink-1 bd-highlight">
                      <select name="muito_queijo" ref="promo_queijo">
                        <option value = "0"></option>
                        <option value = "3">3</option>
                        <option value = "6">6</option>
                        <option value = "9">9</option>
                        <option value = "12">12</option>
                        <option value = "15">15</option>
                      </select>
                    </div>
                  </div>

                <input type="submit" className="btn btn-success" value="Finalizar Compra"/>
            </form>
          </div>
        </div>
        </main>
      </div>
    );
  }
}

export default Cardapio;
