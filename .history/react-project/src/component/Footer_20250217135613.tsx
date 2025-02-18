import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
  const {totalItems, totalPrice} = useCart()

  const year: number = new Date
  return <div>Footer</div>;
};

export default Footer;
