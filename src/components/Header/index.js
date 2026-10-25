import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <Link to="/" className="website-logo-link">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button
          type="button"
          className="hamburger-button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="popup-container">
          <button
            type="button"
            className="close-button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>

          <ul className="popup-menu-list">
            <li>
              <Link to="/" className="popup-link" onClick={() => close()}>
                <AiFillHome />
                <span>Home</span>
              </Link>
            </li>

            <li>
              <Link to="/about" className="popup-link" onClick={() => close()}>
                <BsInfoCircleFill />
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)

export default Header
