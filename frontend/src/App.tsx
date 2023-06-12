import { useState } from "react";

import { Form } from "./components/Form"

function App() {
  const [target, setTarget] = useState("");

  console.log("target: ", target);

  return (
    <>
      <Form setTarget={setTarget} />

      <div>
        {/* {(target && target !== null) && target} */}
      </div>
    </>
  )
}

export default App
