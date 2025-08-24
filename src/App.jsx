import { useState } from "react";
import Home from "./Pages/Home"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer";
import WhatsappFloat from "./Components/whatsapp float";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <WhatsappFloat />
      <Home />
      <Footer />
    </>
  );
}dsds

export default App;
