import "../styles/header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <p>My balance</p>
        <h1>$921.48</h1>
      </div>
      <div className="logo"></div>
    </div>
  );
};

export default Header;
