import { Product } from "./Product";
export type SortingType = {
    name: string;
    query: string;
    sortMethod: (productList: Product[]) => Product[];
  };