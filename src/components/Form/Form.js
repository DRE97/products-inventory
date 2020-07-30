import React from 'react';
import './Form.css';
import axios from 'axios';

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      referencia: '',
      precio: '',
      peso: '',
      categoria: '',
      stock: '',
      ultima_venta: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const obj = this.state;
    axios.post('http://localhost/database/insert.php', obj)
    .then(res => {
      //console.log(res.data);
      alert(res.data);
      document.getElementById('formulario').reset();
    });
  }

  render() {
    return (
      <div className="formulario">
        <h1 className="title">Ingresar nuevo producto</h1>
        <form id="formulario" method="POST" onSubmit={this.handleSubmit}>
          <input type="text" name="nombre" className="form-control" placeholder="Nombre del producto" required
            onChange={e => this.setState({ nombre: e.target.value })}/>
          <input type="text" name="referencia" className="form-control" placeholder="Referencia" required
            onChange={e => this.setState({ referencia: e.target.value })}/>
          <input type="number" name="precio" className="form-control" placeholder="Precio" required
            onChange={e => this.setState({ precio: e.target.value })}/>
          <input type="number" name="peso" className="form-control" placeholder="Peso" required
            onChange={e => this.setState({ peso: e.target.value })}/>
          <input type="text" name="categoria" className="form-control" placeholder="Categoria" required
            onChange={e => this.setState({ categoria: e.target.value })}/>
          <input type="number" name="stock" className="form-control" placeholder="Stock" required
            onChange={e => this.setState({ stock: e.target.value })}/>
          <label>Ultima venta (opcional)</label>
          <input type="date" name="ultima_venta" className="form-control"
            onChange={e => this.setState({ ultima_venta: e.target.value.toString() })}/>
          <input type="submit" value="Añadir" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default Formulario;
