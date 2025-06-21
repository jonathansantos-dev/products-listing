// App.tsx
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import type { Product } from './services/types';
import Products from './pages/products';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [viewType, setViewType] = useState<'list' | 'grid' | 'table'>('list');

  useEffect(() => {
    // Aqui você vai chamar sua API e setar os produtos
  }, []);

  return (
    <Router>      
      <Routes>
        <Route path="/" element={<><h1>Minha Loja Virtual</h1> <Link to={"/products"}>Produtos</Link></>} />
        <Route path="/products" element={<Products />} />
      </Routes>      
    </Router>
  );
}
