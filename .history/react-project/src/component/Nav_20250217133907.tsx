type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropsType) => {
    const button = viewCart ? <button onClick={() => setViewCart}
  return <div>Nav</div>;
};

export default Nav;
