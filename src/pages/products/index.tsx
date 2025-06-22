import * as React from 'react';
import * as S from './styles'
import { SideBar } from './components/Sidebar';
import { ProductList } from './components/ProductList';
import { ListView } from './components/ListView';

export interface IProductsProps {
}

export function Products (props: IProductsProps) {
  return (
    <S.Container>
      <S.Title>Produtos</S.Title>
      <S.Wrapper>
        <SideBar />
        <S.Content>
          <ListView></ListView>
          <ProductList />
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
