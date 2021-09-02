import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import LastPage from "./pages/LastPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={FirstPage} />
      <Route path="/second_page" component={SecondPage} />
      <Route path="/last_page" component={LastPage} />
    </div>
  );
}

export default App;
