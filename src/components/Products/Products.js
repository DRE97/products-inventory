import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css';
import axios from 'axios';

class Productos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(event) {
    let id = event.target.parentNode.parentElement.id;
    //console.log(event.target.parentNode.parentElement.id);
    axios.post('http://localhost/database/delete.php?id='+id, id)
    .then(res => {
      //console.log(res.data);
      alert(res.data);
      window.location.reload();
    });
  }

  handleEdit() {
    console.log('Editar componente!');
  }

  componentDidMount() {
    axios.get('http://localhost/database/read.php')
    .then(response => {
      this.setState({ products: response.data });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="productos">
        <h1>Listado de productos</h1>
        <Table striped bordered hover id="table" method="GET">
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre del producto</th>
              <th>Referencia</th>
              <th>Precio</th>
              <th>Peso</th>
              <th>Categoria</th>
              <th>Stock</th>
              <th>Fecha de creacion</th>
              <th>Ultima venta</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.products.map((obj,i) => {
                return (
                  <tr id={obj.id} key={i}>
                    <td>{obj.id}</td>
                    <td>{obj.nombre}</td>
                    <td>{obj.referencia}</td>
                    <td>{obj.precio}</td>
                    <td>{obj.peso}</td>
                    <td>{obj.categoria}</td>
                    <td>{obj.stock}</td>
                    <td>{obj.fecha_creacion}</td>
                    <td>{obj.fecha_venta!=='' ? obj.fecha_venta : 'N/A'}</td>
                    <td style={{width: "12rem",display: "flex", justifyContent: "space-between"}}>
                    <Link
                      to={{
                        pathname: "/editar",
                        state: [obj.id]
                      }}
                    ><button className="btn btn-primary" onClick={this.handleEdit}>Editar</button></Link>
                    <button className="btn btn-danger" onClick={this.handleDelete}>Eliminar</button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Productos
