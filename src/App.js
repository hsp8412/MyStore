import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/navBar";
import { Route, Routes } from "react-router-dom";
import Message from "./pages/message";
import Orders from "./pages/orders";
import Stock from "./pages/stock";
import Transactions from "./pages/transactions";
import NotFound from "./pages/notFount";
import ProductDetails from "./pages/productDetail";
import LoginForm from "./pages/login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/message" element={<Message />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/" exact element={<Stock />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
