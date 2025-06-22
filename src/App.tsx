
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<><h1>Minha Loja Virtual</h1> <Link to={"/products"}>Produtos</Link></>} />
        <Route path="/products" element={<></>} />
      </Routes>      
    </Router>
  );
}
