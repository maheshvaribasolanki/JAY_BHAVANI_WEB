import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
    </>
  );
}

export default App;
