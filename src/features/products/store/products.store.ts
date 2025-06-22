import { create } from 'zustand';

type Product = {
    id: number,
    title: string
    price: number,
    description: string,
    category: string
    image: string
}

type ProductStore = {
    products: Product[],
    productsSet: (productsProps: Product[]) => void,
    searchedProducts: Product[],
    search: (str: string) => void
}

const useProductsStore = create<ProductStore>((set, get) => {
    return {
        products: [],
        productsSet: (productsProps: Product[]) => {
            set({
                products: productsProps
            })
        },
        searchedProducts: [],
        search: (str: string) => {
            const searchedProducts = get().products.filter(item => item.title.includes(str) || item.description.includes(str))
            set({ searchedProducts })
        }
    }
})

export default useProductsStore;