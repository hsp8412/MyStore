import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/navBar";
import { Route, Routes } from "react-router-dom";
import Message from "./component/message";
import Orders from "./component/orders";
import Stock from "./component/stock";
import Transactions from "./component/transactions";
import NotFound from "./component/notFount";
import ProductDetails from "./component/productDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
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
