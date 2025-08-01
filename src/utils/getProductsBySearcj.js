export const getProductsBySearch = (products, searchValue) => {
  console.log("search", searchValue, products);
  const afterFilter =
    searchValue.length > 0 && products.length > 0
      ? products.filter(
          (prod) =>
            prod.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            prod.category.toLowerCase().includes(searchValue.toLowerCase()) ||
            prod.thumbnail.toLowerCase().includes(searchValue.toLowerCase())
        )
      : products;
  return afterFilter;
};
