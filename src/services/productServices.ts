import type { Product } from './types';
import { instance } from './instance';
import type { AxiosResponse } from 'axios';

const BASE_URL = '/products';

export const getProducts = () => {
  try {
    return instance.get(BASE_URL)
    .then((response: AxiosResponse) => response.data as Product[]);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}