import { useState } from "react";

import { Form } from "./components/Form"
import { globalStyles } from "./styles/global";
import { TreeDecisionsContextProvider } from "./hooks/useTreeDecision";

function App() {
  globalStyles();

  return (
    <TreeDecisionsContextProvider>
      <Form />
    </TreeDecisionsContextProvider>
  )
}

export default App
