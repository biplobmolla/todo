import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import TODO from "./pages/TODO";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<TODO />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
