import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import { UseProductsContextType } from "../context/ProductsProvider";
import { ReactElement } from "react";
import Product from "./Product";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

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

  if (products?.length) {
    pageContent = products.map((product) => {
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

  const content = (
    <main
      className="main main--products"
      style={{ marginLeft: "60px", marginRight: "60px" }}
    >
      {pageContent}
    </main>
  );

  return content;
};

export default ProductList;
