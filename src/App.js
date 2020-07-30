import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Formulario from './components/Form/Form';
import Productos from './components/Products/Products.js';
import { Button } from 'react-bootstrap';
import Actualizar from './components/Actualizar/Actualizar';

function App() {

  return (
    <div className="App">
    <Router>
      <nav className="navButtons">
        <Link to={'/formulario'}><Button variant="primary">Nuevo Producto</Button></Link>
        <h1>INVENTARIO</h1>
        <Link to={'/productos'} ><Button variant="info">Ver Productos</Button></Link>
      </nav>
      <Switch>
        <Route exact path='/formulario' component={ Formulario } />
        <Route exact path='/productos' component={ Productos } />
        <Route exact path='/editar' component={ Actualizar } />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
