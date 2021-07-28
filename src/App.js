import React from 'react';
import Signin from './components/Signin/Signin';
import {BrowserRouter as Router ,Route} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <Router>
      <Route path="/"exact component={Signin}/>
      <Route path="/homepage" component={Homepage}/>
    </Router>
    // <div>
    //   <Signin/>
    // </div>
  );
}

export default App;
