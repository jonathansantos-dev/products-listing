import { useEffect, useState } from "react";
import { getProducts } from "../services/productServices"
import type { Product } from "../services/types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data || []);
      console.log('useProducts hook called', data);
    };

    fetchProducts();
  }, []);


  return { products }
}