import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Leevi Peltonen</p>
    </footer>
  );
};

export default Footer;
