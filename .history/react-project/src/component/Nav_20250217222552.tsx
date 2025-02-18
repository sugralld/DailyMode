type PropsType = {
  onToggleCart: () => void;
};

const Nav = ({ onToggleCart }: PropsType) => {
  return (
    <nav className="nav">
      <button onClick={onToggleCart}>View Products / View Cart</button>
    </nav>
  );
};

export default Nav;
