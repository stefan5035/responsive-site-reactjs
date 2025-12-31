export default function Footer() {
  return (
    <footer className="footer">
  <div className="container footer-grid">

    <div className="footer-brand">
      <h3>Nexcent</h3>
      <p>Copyright © 2020 Nexcent ltd.</p>
      <p>All rights reserved</p>

      <div className="footer-socials">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-dribbble"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>

    <div className="footer-links">
      <h4>Company</h4>
      <a href="#">About us</a>
      <a href="#">Blog</a>
      <a href="#">Contact us</a>
      <a href="#">Pricing</a>
      <a href="#">Testimonials</a>
    </div>

    <div className="footer-links">
      <h4>Support</h4>
      <a href="#">Help center</a>
      <a href="#">Terms of service</a>
      <a href="#">Legal</a>
      <a href="#">Privacy policy</a>
      <a href="#">Status</a>
    </div>

    <div className="footer-subscribe">
      <h4>Stay up to date</h4>
      <div className="subscribe-input">
        <input type="email" placeholder="Your email address" />
        <button>➤</button>
      </div>
    </div>

  </div>
</footer>
  )
}