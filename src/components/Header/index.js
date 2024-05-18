// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-data">
    <div className="navbar-items-container">
      <div className="logo-container">
        <img
          className="nxt-logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <p className="nxt-title">Wave</p>
      </div>
      <ul className="navitems-list">
        <li className="navitem">
          <Link className="link-item" to="/">
            Home
          </Link>
        </li>
        <li className="navitem">
          <Link className="link-item" to="/about">
            About
          </Link>
        </li>
        <li className="navitem">
          <Link className="link-item" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
