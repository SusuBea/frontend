import './App.css';
import React from "react";
import useAdatContext from './contexts/AdatContext';

function App() {
  const {szavakLista , temaLista} = useAdatContext();

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>SzótáProgram</h1>
      </header>
    </div>
      
        <article>
       <table>
       
       </table>
          <thead>
          <tr>
          <th>ANGOL</th>
          <th>MAGYAR</th>
          <th>viszajelzés</th>
          </tr>
          </thead>

          <tbody>
            < Sor />
          </tobdy>
        </article>
      </>
  );
}

export default App;
