import * as React from 'react';
import { useProducts } from '../../hooks/useProducts';
import type { ProductTypes } from '../../../../types/productTypes';
import * as S from './styles'

export interface IProductListProps {
}

export function ProductList (props: IProductListProps) {
  const { data: products, isFetching, error } = useProducts()

  if (isFetching) return <div>Buscando produtos</div>

  if (error) return <div>Ocorreu um erro ao buscar os produtos</div>

  return (
    <div>
      <S.List>
        {products.map((product: ProductTypes, index: number) => {
          return <S.ListItem key={index}>
            <S.Image src={product.image}></S.Image>
            <S.Title>{product.title}</S.Title>            
            <S.Price>{product.price}</S.Price>            
          </S.ListItem>
        })}    
      </S.List>
    </div>
  );
}
