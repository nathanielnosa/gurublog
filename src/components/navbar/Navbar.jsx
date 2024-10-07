import './navbar.css';
import { NAVBAR_LINKS } from './Navbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="" className="navbar-brand">Guru-Blog</a>
        <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#guru">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id='guru'>
          <ul className="navbar-nav ms-auto">
            {
              NAVBAR_LINKS.map(({ id, title, link }) => (
                <li className="nav-item" key={id}>
                  <Link to={link} className="nav-link">{title}</Link>
                </li>
              ))
            }

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;