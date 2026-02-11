import './Footer.css'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-frame">
        <div className="footer-left">
          <div className="footer-logo">
            <img
              src="/images/iteration-2-images/footer/logo-footer.svg"
              alt="Teknolojik Yemekler Logo"
            />
          </div>
          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <img
                src="/images/iteration-2-images/footer/icons/icon-1.png"
                alt="Konum"
                className="footer-contact-icon"
              />
              <span className="footer-contact-text">
                341 Londonderry Road,
                <br />
                Istanbul Türkiye
              </span>
            </li>
            <li className="footer-contact-item">
              <img
                src="/images/iteration-2-images/footer/icons/icon-2.png"
                alt="E-posta"
                className="footer-contact-icon"
              />
              <span className="footer-contact-text">
                aciktim@teknolojikyemekler.com
              </span>
            </li>
            <li className="footer-contact-item">
              <img
                src="/images/iteration-2-images/footer/icons/icon-3.png"
                alt="Telefon"
                className="footer-contact-icon"
              />
              <span className="footer-contact-text">+90 216 123 45 67</span>
            </li>
          </ul>
        </div>

        <div className="footer-center">
          <h3 className="footer-menu-title">Hot Menu</h3>
          <ul className="footer-menu-list">
            <li className="footer-menu-item">Terminal Pizza</li>
            <li className="footer-menu-item">5 Kişilik Hackathlon Pizza</li>
            <li className="footer-menu-item">useEffect Tavuklu Pizza</li>
            <li className="footer-menu-item">Beyaz Console Frosty</li>
            <li className="footer-menu-item">Testler Geçti Mutlu Burger</li>
            <li className="footer-menu-item">Position Absolute Acı Burger</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3 className="footer-instagram-title">Instagram</h3>
          <div className="footer-instagram-frame">
            <ul className="footer-instagram-list">
              <li className="footer-instagram-item">
                <img
                  src="/images/iteration-2-images/footer/insta/li-0.png"
                  alt="Instagram Post 1"
                />
              </li>
              <li className="footer-instagram-item">
                <img
                  src="/images/iteration-2-images/footer/insta/li-1.png"
                  alt="Instagram Post 2"
                />
              </li>
              <li className="footer-instagram-item">
                <img
                  src="/images/iteration-2-images/footer/insta/li-2.png"
                  alt="Instagram Post 3"
                />
              </li>
              <li className="footer-instagram-item">
                <img
                  src="/images/iteration-2-images/footer/insta/li-3.png"
                  alt="Instagram Post 4"
                />
              </li>
              <li className="footer-instagram-item">
                <img
                  src="/images/iteration-2-images/footer/insta/li-4.png"
                  alt="Instagram Post 5"
                />
              </li>
              <li className="footer-instagram-item">
                <img
                  src="/images/iteration-2-images/footer/insta/li-5.png"
                  alt="Instagram Post 6"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © 2023 Teknolojik Yemekler.
          </p>
          <div className="footer-social">
            <img
              src="/images/iteration-2-images/footer/icons/icons8-twitter-bird.svg"
              alt="Twitter"
              className="footer-twitter-icon"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
