import React from 'react';
import './App.css';
import NationalCases from './components/NationalCases';
import MostImpacted from './components/MostImpacted';
import QueryForm from './components/QueryForm';

const App = () => {
  return (
  <div className="App">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossOrigin="anonymous"
    />
    <div className="top-row">
      <NationalCases/>
      <MostImpacted/>
    </div>
    <QueryForm/>
  </div>
  );
};

export default App;
