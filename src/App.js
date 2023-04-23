import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Navbar } from "./components/navbar"; 
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Contact } from "./pages/contact/contact";
import { About } from "./pages/about/about";
import { ShopContextProvider } from "./context/shop-contex";
import SignIn from "./pages/auth/SignIn";


function App() {
  
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/login" element={<SignIn/>}/>
          <Route path="/home" element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
      
    </div>
    
  );
}

export default App;
