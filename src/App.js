import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import TelaPrincipal from './routed/TelaPrincipal';

import { 
  BrowserRouter as Router, 
  Route,
  Routes
} from 'react-router-dom';

export default function App() {

  return(
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<TelaPrincipal />} />
        </Routes>    
      </Router>
    </>
  );
};
