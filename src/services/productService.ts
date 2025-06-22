import { api } from "../config/instaceAxios"

const BASE_PATH = '/products'

export const getProducts = async () => {
  try {
    const { data } = await api.get(BASE_PATH)
    return data
  } catch (error) {
    console.log({error})
  }
}