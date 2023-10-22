import { useState } from "react";
import Home from "./Pages/Home"
import NavBar from "./Components/NavBar"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
