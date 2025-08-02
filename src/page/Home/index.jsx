import { useEffect } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../api/products";
import ProductCard from "../../components/ProductCard";
import { Box, Grid } from "@mui/material";
import { getProductsBySearch } from "../../utils/getProductsBySearcj";
const Home = () => {
  const dispatch = useDispatch();
  const { products, searchValue } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const filterByName = getProductsBySearch(products, searchValue);
  const { favouriteProducts } = useSelector((state) => state.products);

  const favouriteIds = new Set(favouriteProducts.map((p) => p.id));

  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1, marginTop: 6, marginBottom: 6 }}>
        <Grid container spacing={2}>
          {
            //without API search
            // filterByName?.length >0 && filterByName?.map((prod)=>
            //     <ProductCard key={prod.id} prod={prod}/>
            // )

            //with API search
            products?.length > 0 &&
              products?.map((prod) => (
                <ProductCard
                  key={prod.id}
                  prod={prod}
                  isFavourite={favouriteIds.has(prod.id)}
                />
              ))
          }
        </Grid>
      </Box>
    </>
  );
};

export default Home;
