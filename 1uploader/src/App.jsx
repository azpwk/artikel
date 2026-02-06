import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
//
function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
