import React from 'react';
import './Actualizar.css';
import axios from 'axios';

class Actualizar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
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

  componentDidMount() {
    const id = this.props.location.state[0];
    //console.log(id);

    axios.post('http://localhost/database/getRowById.php', id)
    .then(res => {
      //console.log(res.data[0].nombre);
      this.setState({
        id: id,
        nombre: res.data[0].nombre,
        referencia: res.data[0].referencia,
        precio: res.data[0].precio,
        peso: res.data[0].peso,
        categoria: res.data[0].categoria,
        stock: res.data[0].stock,
        ultima_venta: res.data[0].ultima_venta
      });
      if(!res.data[0].ultima_venta) {
        this.setState({ ultima_venta: 'N/A' });
      }
      console.log(this.state);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const obj = this.state;
    axios.post('http://localhost/database/edit.php', obj)
    .then(res => {
      console.log(res.data);
      alert(res.data);
      document.getElementById('formulario').reset();
    });
  }

  render() {
    return (
      <div className="formulario">
        <h1 className="title">Actualizar producto</h1>
        <form id="formulario" method="POST" onSubmit={this.handleSubmit}>
          <input type="text" name="nombre" className="form-control" defaultValue={this.state.nombre} required
            onChange={e => this.setState({ nombre: e.target.value })}/>
          <input type="text" name="referencia" className="form-control" value={this.state.referencia} required
            onChange={e => this.setState({ referencia: e.target.value })}/>
          <input type="number" name="precio" className="form-control" value={this.state.precio} required
            onChange={e => this.setState({ precio: e.target.value })}/>
          <input type="number" name="peso" className="form-control" value={this.state.peso} required
            onChange={e => this.setState({ peso: e.target.value })}/>
          <input type="text" name="categoria" className="form-control" value={this.state.categoria} required
            onChange={e => this.setState({ categoria: e.target.value })}/>
          <input type="number" name="stock" className="form-control" value={this.state.stock} required
            onChange={e => this.setState({ stock: e.target.value })}/>
          <label>Ultima venta (opcional)</label>
          <input type="date" name="ultima_venta" className="form-control"
            onChange={e => this.setState({ ultima_venta: e.target.value.toString() })}/>
          <input type="submit" value="Actualizar" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default Actualizar;
