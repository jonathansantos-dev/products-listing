// App.tsx
import { useEffect, useState } from 'react';
import type { Product } from '../../services/types';
import * as S from './styles';
import SidebarFilter from '../../components/SidebarFilter';
import { useProducts } from '../../hooks/useProducts';

export default function Products() {
  const { products } = useProducts()
  const [viewType, setViewType] = useState<'list' | 'grid' | 'table'>('list');

  console.log('Products component called', products);

  return (
    <S.Container>
      <h1>Product Listing</h1>

      <S.Wrapper>

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
          <div>
            <button onClick={() => setViewType('list')}>List</button>
            <button onClick={() => setViewType('grid')}>Grid</button>
            <button onClick={() => setViewType('table')}>Table</button>
          </div>
          <section>
            {products.map((product: Product, index: number) => {
              return <li key={`${index}-${product.name}`}>
                {product.name} - {product.price}
              </li>
            })}
          </section>
        </div>
      </S.Wrapper>


      {/* Aqui você renderiza os produtos com base na viewType */}
    </S.Container>
  );
}
