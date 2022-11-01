import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ExpenseTracker from './Components/ExpenseTracker';
import ShowData from './Components/ShowList';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/add" component={ExpenseTracker} />
          <Route path="/" component={ShowData} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;