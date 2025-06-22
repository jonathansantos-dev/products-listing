
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Products } from "./pages/products";

export default function App() {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<><h1>Minha Loja Virtual</h1> <Link to={"/products"}>Produtos</Link></>} />
        <Route path="/products" element={<Products />} />
      </Routes>      
    </Router>
  );
}
