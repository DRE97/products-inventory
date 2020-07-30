import React from 'react';
import {Button} from 'react-bootstrap';
import './Navbar.css';

function Navbar(props) {
  return (
    <div className="navButtons">
      <Button variant="primary" onClick={props.handleInsert}>Añadir Producto</Button>
      <h1>INVENTARIO</h1>
      <Button variant="info" onClick={props.handleView}>Ver Productos</Button>
    </div>
  );
}

export default Navbar;
