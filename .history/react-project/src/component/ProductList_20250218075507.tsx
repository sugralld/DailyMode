import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import { UseProductsContextType } from "../context/ProductsProvider";
import { ReactElement } from "react";
import { useState } from "react";
import Product from "./Product";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Box
} from "@mui/material";

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  // untuk kategori filter
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  // Filter produk berdasarkan kategori yang dipilih
  const filteredProducts =
    categoryFilter === "All"
      ? products
      : products.filter((product) => product.category === categoryFilter);

  if (filteredProducts?.length) {
    pageContent = filteredProducts.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }

  // kalo ada perubahan kategori filter
  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setCategoryFilter(event.target.value);
  };

  const content = (
    <main
      className="main main--products"
      style={{ marginLeft: "60px", marginRight: "60px" }}
    >
      <Box sx={{ mt: 2 }}>
        <FormControl sx={{ width: "150px" }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={categoryFilter}
            onChange={handleCategoryChange}
            label="Category"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Top">Top</MenuItem>
            <MenuItem value="Shoes">Shoes</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {pageContent}
      </Box>
    </main>
  );

  return content;
};

export default ProductList;
