import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";
import Content from "./components/Content";
import axios from "axios";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
