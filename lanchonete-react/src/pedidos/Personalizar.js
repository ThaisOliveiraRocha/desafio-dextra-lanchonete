import React, {Component} from 'react';
import '../App.css';
import Cabecalho from '../Cabecalho';
import IngredientesDisponiveis from '../info_lanches/ingredientes_disponiveis';
import axios from 'axios';

class Personalizar extends Component{
  constructor(props){
    super(props);
    this.state = {
      isCheckedA: false,
      isCheckedB: false,
      isCheckedH: false,
      isCheckedO: false,
      isCheckedQ: false
    }
    this.handleCheckedA = this.handleCheckedA.bind(this);
    this.handleCheckedB = this.handleCheckedB.bind(this);
    this.handleCheckedH = this.handleCheckedH.bind(this);
    this.handleCheckedO = this.handleCheckedO.bind(this);
    this.handleCheckedQ = this.handleCheckedQ.bind(this);

    this.onAddSubmit   = this.onAddSubmit.bind(this)
  }

  handleCheckedA () {
    this.setState({isCheckedA: !this.state.isCheckedA});
  }

  handleCheckedB () {
    this.setState({isCheckedB: !this.state.isCheckedB});
  }

  handleCheckedH () {
    this.setState({isCheckedH: !this.state.isCheckedH});
  }

  handleCheckedO () {
    this.setState({isCheckedO: !this.state.isCheckedO});
  }

  handleCheckedQ () {
    this.setState({isCheckedQ: !this.state.isCheckedQ});
  }

  addLanchePersonalizado(){
    axios.post("http://localhost:8080", {
      "name": this.refs.nome.value,
      "alface": this.refs.alface.value,
      "bacon": this.refs.bacon.value,
      "hamburguer": this.refs.hamburguer.value,
      "ovo": this.refs.ovo.value,
      "queijo": this.refs.queijo.value,
      "muita_carne" : this.refs.promo_carne.value,
      "muito_queijo" : this.refs.promo_queijo.value
    })
    .then(res => {
      alert("Compra finalizada no valor de R$ "+res.data.preco);
      window.location.href="http://localhost:3000/";
    }).catch(err=> console.log(err));
  }

  onAddSubmit(event){
    event.preventDefault();
    this.addLanchePersonalizado();
  }

  render(){
    return(
      <div className="Personalizar">
          <Cabecalho />

          <main>
            <div className="container">

              <div  className="d-flex justify-content-center">
                <div className="table table-striped table-hover">
                  <IngredientesDisponiveis />
                </div>
                <form onSubmit={this.onAddSubmit}>
                  <label className="font-weight-bold"> Selecione os ingredientes: </label><br/>
                  <div class="d-flex justify-content-around">
                    <input type="checkbox" name="alface" value={this.state.isCheckedA} onChange={this.handleCheckedA} ref="alface"/>alface
                    <input type="checkbox" name="bacon" value={this.state.isCheckedB} onChange={this.handleCheckedB} ref="bacon"/>bacon
                    <input type="checkbox" name="hamburguer" value={this.state.isCheckedH} onChange={this.handleCheckedH} ref="hamburguer"/>hambúrguer de carne
                    <input type="checkbox" name="ovo" value={this.state.isCheckedO} onChange={this.handleCheckedO} ref="ovo"/>ovo
                    <input type="checkbox" name="queijo" value={this.state.isCheckedQ} onChange={this.handleCheckedQ} ref="queijo"/>queijo
                  </div>
                  <h2>Promoções</h2>
                  <p className="font-weight-bold">Light tem desconto!</p>
                  <p>Na compra de um lanche com alface e sem bacon, o cliente ganha 10% de desconto!</p>

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

                  <p className="font-weight-bold">Invente um nome para o seu lanche:</p>
                  <div class="d-flex justify-content-around">
                    <input type="text" name="nomePersonalizado" ref="nome" placeholder="Digite o nome do lanche" required/>
                    <input type="submit" className="btn btn-success" value="Finalizar Compra"/>
                  </div>
                </form>
              </div>
            </div>
          </main>
      </div>
    );
  }
}

export default Personalizar;
