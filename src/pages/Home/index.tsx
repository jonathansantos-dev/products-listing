import React from 'react';
import ProductList from '../../features/products/components/productList';

import * as S from './styles';

const Home: React.FC = () => {
    return (
        <S.Container>

            <ProductList />
        </S.Container>
    )
}

export default Home;