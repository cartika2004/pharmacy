import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header"; // 1. Impor komponen Header
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* 2. Letakkan Header di sini */}
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 Not Found!</Route> {/* Rute untuk halaman tidak ditemukan */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;