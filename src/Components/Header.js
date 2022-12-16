import "./Header.css"

const Header = (props) => {
  return (
    <div className="HeaderContainer">
        <h1 className={"TittleHeader"}>{props.title}</h1>
    </div>
  );
};

export default Header;