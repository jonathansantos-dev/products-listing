import { create } from 'zustand'

type productStore = {
    products: any[],
    typeView: 'list' | 'grid',
    setTypeView: (typeView: 'list' | 'grid') => void,
    setProducts: (products: any[]) => void,
    setSearchTerm: (searchTerm: string) => void,
    setFilter: (filter: any) => void,
    filter: any,
    searchTerm: string
}

export const useProductsStore = create<productStore>((set, get) => {
    return {
        products: [],
        filter: 'all',
        typeView: 'list',
        searchTerm: '',
        setSearchTerm: (searchTerm: string) => {
            set({ searchTerm })
        },
        setFilter: (filter: any) => {
            set({ filter })
        },
        setProducts: (products: any[]) => {
            set({ products })
        },
        setTypeView: (typeView: 'list' | 'grid') => {
            set({ typeView })
        }
    }
});