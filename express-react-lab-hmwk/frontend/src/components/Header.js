import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#add8e6",
    border: "none",
    padding: "8px",
    width: "100%",
    margin: "auto",
  };

  return (
    <header>
      {/* <h1>My Portfolio Page</h1> */}
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;