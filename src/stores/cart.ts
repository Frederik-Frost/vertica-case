import { defineStore } from 'pinia';
import { Product } from './../types/Product';
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [] as Product[],
  }),
  getters: {},
  actions: {
    addProduct(product: Product) {
      this.items.push(product);
    },
    removeProductById(id: number) {
      this.items.splice(this.items.findIndex((item) => item.id === id), 1);
    },
  },
});
