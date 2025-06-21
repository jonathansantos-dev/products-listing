import { useEffect } from "react";
import { getProducts } from "../services/productServices"

export const useProducts = () => {
  // const [products, setProducts] = useState([]);
  // const [viewType, setViewType] = useState<'list' | 'grid' | 'table'>('list');

  useEffect(() => {

  }, []);

  const response = async () => {
    await getProducts()
  }

  return { response }
}