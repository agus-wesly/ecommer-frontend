import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./pages/layout/RootLayout";
import Home from "./pages/home";
import ProductDetail from "./pages/itemdetail";
import Checkout from "./pages/checkout";
import Success from "./pages/success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="/checkout">
            <Route index element={<Checkout />} />
          </Route>
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
