import React, { lazy, Suspense } from 'react';

const ProductsSearch = lazy(() => import('../../features/products/components/ProductSearch'))
const ProductsList = lazy(() => import('../../features/products/components/ProductsList'))

const Home: React.FC = () => {
    return (
        <>
            <h1> Home </h1>

            <Suspense fallback={<> Loading Component...</>}>
                <ProductsSearch />
            </Suspense>

            <Suspense fallback={<> Loading Component...</>}>
                <ProductsList />
            </Suspense>
        </>
    );
}

export default Home;