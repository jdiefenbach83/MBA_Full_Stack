import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/SigIn">SigIn</Link>
            </li>
            <li>
              <Link to="/SignUp">SignUp</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
