import React from "react";
import "./Footer.css";

// Social link component
const SocialLink = ({ href, iconClass }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={iconClass}></i>
    </a>
  </li>
);

// Footer link component
const FooterLink = ({ href, text }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </li>
);

// Array of social links
const socialLinks = [
  { href: "https://x.com/Blockchain55355", iconClass: "bi bi-twitter" },
  { href: "https://discord.gg/ChYHZax7", iconClass: "bi bi-discord" },
  { href: "https://www.instagram.com/coolcriminal2025?igsh=cHZqcHVzYTN3OTUz&utm_source=qr", iconClass: "bi bi-instagram" },
  { href: "https://facebook.com", iconClass: "bi bi-facebook" },
  { href: "https://youtube.com", iconClass: "bi bi-youtube" },
];

// Array of footer links
const footerLinks = [
  { href: "/", text: "Blog" },
  { href: "/", text: "Privacy" },
  { href: "/", text: "Terms of use" },
  { href: "/", text: "Sign In" },
  { href: "/", text: "Sign Up" },
];

export default function Footer() {
  return (
    <section className="Footer">
      <div className="container">
        <div className="row">
          <div className="join-us">
            <h1>
              JOIN US VIA
              <br />
              <span>DISCORD</span>
            </h1>
            <p className="subtitle">Invest and manage all your NFTs at one place.</p>
            <div className="cta">
              <a href="https://discord.gg/ChYHZax7" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </div>
          </div>

          <ul className="social-links">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} href={link.href} iconClass={link.iconClass} />
            ))}
          </ul>

          <ul className="footer-links">
            {footerLinks.map((link, index) => (
              <FooterLink key={index} href={link.href} text={link.text} />
            ))}
          </ul>

          <p className="copy">© 2025 CoolCriminal_Universe with 💜 by 
            <a href="https://anai.services" target="_blank" rel="noopener noreferrer">@AnAi-Blockchain service</a></p>
        </div>
      </div>
    </section>
  );
}
