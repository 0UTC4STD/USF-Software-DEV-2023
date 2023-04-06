import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Chips from './Chips';
import Soda from './Soda';
import Candy from './Candy';
import './App.css';

const VendingMachine = () => (
  <div className="container">
    <div className="box">
      <h1>The Vending Machine</h1>
      <nav>
        <ul>
          <li>
            <a href="/chips">Chips</a>
          </li>
          <li>
            <a href="/soda">Soda</a>
          </li>
          <li>
            <a href="/candy">Candy</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={VendingMachine} />
    <Route path="/chips" component={Chips} />
    <Route path="/soda" component={Soda} />
    <Route path="/candy" component={Candy} />
  </BrowserRouter>
);

export default App;