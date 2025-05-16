import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-row">
      <div className="footer-col">
        <h3>About Carsoko</h3>
        <p>
          Carsoko is your trusted platform <br/> 
          for buying and selling new and used <br/> 
          cars. We connect buyers and sellers <br/> 
          across the country, making car trading<br/> 
          easy, safe, and transparent.
        </p>
      </div>
      <div className="footer-col">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/inventory">Inventory</a></li>
          <li><a href="/sell">Sell Your Car</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h3>Contact</h3>
        <ul>
          <li>Email: support@carsoko.com</li>
          <li>Phone: +254706603680</li>
          <li>Address: 123 Main Street, Nairobi</li>
        </ul>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{" "}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |{" "}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-col">
        <h3>Newsletter</h3>
        <p>Subscribe to get the latest car deals and updates.</p>
        <form className="footer-newsletter">
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <span>&copy; {new Date().getFullYear()} Carsoko. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;