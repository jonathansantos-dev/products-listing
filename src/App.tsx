// App.tsx
import { useEffect, useState } from 'react';
import SidebarFilter from './SidebarFilter';

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image?: string;
};

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [viewType, setViewType] = useState<'list' | 'grid' | 'table'>('list');

  useEffect(() => {
    // Aqui você vai chamar sua API e setar os produtos
  }, []);

  return (
    <div>
      <h1>Product Listing</h1>

      <SidebarFilter 
        onSearch={(value) => {
          // Aqui você vai filtrar os produtos com base no valor de busca
        }}
        onCategoryChange={(value) => {
          // Aqui você vai filtrar os produtos com base na categoria selecionada
        }}
      />
      
      {/* Botões de troca de visualização */}
      <div>
        <button onClick={() => setViewType('list')}>List</button>
        <button onClick={() => setViewType('grid')}>Grid</button>
        <button onClick={() => setViewType('table')}>Table</button>
      </div>

      {/* Aqui você renderiza os produtos com base na viewType */}
      <section>
        {/* Componente que você ainda vai criar */}
      </section>
    </div>
  );
}
