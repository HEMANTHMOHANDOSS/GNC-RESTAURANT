import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="logo-name">
        <img
          src="https://i.ibb.co/ryTfRTM/gnc.png"
          alt="website-footer-logo"
          className="footer-logo"
        />
        <h1 className="footer-heading">GNC Restaurant</h1>
      </div>
      <p className="footer-description">
        The only thing we are serious about is food. <br />
        Contact us on
      </p>
      <div className="sm-logos">
        <ul className="sm-list">
          <li className="sm-logo">
            <FaPinterestSquare testid="pintrest-social-icon" color="#FFFFFF" />
          </li>
          <li className="sm-logo">
            <FaInstagram testid="instagram-social-icon" color="#FFFFFF" />
          </li>
          <li className="sm-logo">
            <FaTwitter testid="twitter-social-icon" color="#FFFFFF" />
          </li>
          <li className="sm-logo">
            <FaFacebookSquare testid="facebook-social-icon" color="#FFFFFF" />
          </li>
        </ul>
      </div>
    </div>
  )
}
