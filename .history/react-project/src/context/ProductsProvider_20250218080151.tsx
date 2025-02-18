import { createContext, ReactElement, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
  category: string;
};

// hard-coded items -> ga pake json, easier to deploy.
const initState: ProductType[] = [
  {
    sku: "item00001",
    name: "Blouse",
    price: 149000,
    category: "Top",
  },
  {
    sku: "item00002",
    name: "T-Shirt",
    price: 99000,
    category: "Top",
  },
  {
    sku: "item00003",
    name: "Jacket",
    price: 499000,
    category: "Top",
  },
  {
    sku: "item00004",
    name: "Dress",
    price: 299000,
    category: "Top",
  },
  {
    sku: "item00005",
    name: "Heels",
    price: 349000,
    category: "Shoes",
  },
  {
    sku: "item00006",
    name: "Sneakers",
    price: 449000,
    category: "Shoes",
  },
  {
    sku: "item00007",
    name: "Flats",
    price: 169000,
    category: "Shoes",
  },
  {
    sku: "item00008",
    name: "Wedges",
    price: 279000,
    category: "Shoes",
  },
  {
    sku: "item00009",
    name: "Loafers",
    price: 359000,
    category: "Shoes",
  },
];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

// children
type ChildrenType = { children?: ReactElement | ReactElement[] };

// create provider
export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const filteredProducts =
    categoryFilter === "All"
      ? products
      : products.filter((product) => product.category === categoryFilter);

  return (
    <ProductsContext.Provider value={{ products: filteredProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
