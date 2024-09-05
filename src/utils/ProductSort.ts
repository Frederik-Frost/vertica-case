import { SortingType } from './../types/SortingType';
export default class ProductSort {
  static sortingTypes: SortingType[] = [
    {
      name: 'Price: low to high',
      query: 'price-ascending',
      sortMethod:  (productList) => {
        return productList.sort((a, b) => a.price - b.price);
      },
    },
    {
      name: 'Price: high to low',
      query: 'price-descending',
      sortMethod: (productList) => {
        return productList.sort((a, b) => b.price - a.price);
      },
    },
    {
      name: 'A - Z',
      query: 'name-ascending',
      sortMethod: (productList) => {
        return productList.sort((a, b) => a.title.localeCompare(b.title));
      },
    }
  ];
  
}
