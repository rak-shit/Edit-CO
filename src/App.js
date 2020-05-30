import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './components/Forms'
import ProductList from './components/ProductList'
import { Card } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Card className="main">
        <div className="form">
          <Forms bill={true} />
        </div>
        <div className="form">
          <Forms bill={false} />
        </div>
      </Card>
      <div className="product">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
