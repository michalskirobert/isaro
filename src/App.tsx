import React from "react";

import {Statuses} from "@utils/enums"

const dupxo = (val: number): string => val === Statuses.Accepted ? 'DUPXO' : 'Nie DUPXO' 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         <span style={{fontSize: "25rem"}}> {dupxo(2)}</span> <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Robert
        </a>
      </header>
    </div>
  );
}

export default App;
