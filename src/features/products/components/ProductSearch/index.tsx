import React from 'react';
import { useProductsStore } from '../../store/product.store';

const ProductSearch: React.FC = () => {
    const { searchTerm, setSearchTerm } = useProductsStore()

    return (
        <>
            <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}></input>
        </>
    );
}

export default ProductSearch;