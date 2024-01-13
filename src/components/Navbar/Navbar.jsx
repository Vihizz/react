import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">EV-olution</div>

      <ul className="nav-menu">
        <li className="nav-ref">Home</li>
        <li className="nav-ref">Explore</li>
        <li className="nav-ref">About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
