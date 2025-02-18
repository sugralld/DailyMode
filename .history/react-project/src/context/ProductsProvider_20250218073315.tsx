import { createContext, ReactElement, useState, useEffect } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
  category: string;
};

// const initState: ProductType[] = [];

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

  // kalo mau pake json server pake useeffect, kalo ga gausah
  // useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     const data = await fetch("https://localhost:3500/products")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .catch((err) => {
  //         if (err instanceof Error) console.log(err.message);
  //       });
  //     return data;
  //   };
  //   fetchProducts().then((products) => setProducts(products));
  // }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
