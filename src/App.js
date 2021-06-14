import React from 'react';
import { Container } from "./Container/Container"
import './App.css';
import { ScrollToTop } from "./Container/ScrollToTop"
import 'animate.css'

function App() {
  return (
    <div className="App">
      <Container />
      <ScrollToTop />
    </div>
  );
}

export default App;
