import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Inline Style Objects
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "radial-gradient(circle, rgb(112, 90, 184) 0%, rgb(255, 255, 255) 100%)",
      boxShadow: "0 2px 4px rgb(0, 0, 0)",
      fontFamily: "sans-serif",
      position: "relative",
      borderRadius:"5px",
      margin:"5px",
    },
    logo: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#333333",
      textDecoration: "none",
    },
    menuToggle: {
      display: "none", // Managed by media queries in pure CSS, handled structural logic below
      flexDirection: "column",
      gap: "5px",
      background: "none",
      border: "none",
      cursor: "pointer",
    },
    bar: {
      width: "25px",
      height: "3px",
      backgroundColor: "#4e4e4e",
      borderRadius: "2px",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    link: {
      textDecoration: "none",
      color: "#343434",
      fontSize: "15px",
      fontWeight: "600",
    },
    btnLink: {
      textDecoration: "none",
      backgroundColor: "#007bff",
      color: "#303030",
      padding: "8px 16px",
      borderRadius: "4px",
      fontSize: "15px",
      fontWeight: "600",
    },
   
  };

  // Simplistic fallback logic for window dimensions in React state could be applied, 
  // but for clean implementation this presents regular desktop flex + optional menu dropdown.
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        
      </Link>

      {/* Hamburger Icon for Mobile Displays */}
      <button 
        style={{...styles.menuToggle, display: window.innerWidth <= 768 ? "flex" : "none"}} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
      </button>

      {/* Navigation Links */}
      <div style={window.innerWidth <= 768 && isOpen ? styles.mobileLinks : (window.innerWidth <= 768 ? {display: "none"} : styles.navLinks)}>
        <Link to="/" style={styles.link} onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/login" style={styles.link} onClick={() => setIsOpen(false)}>Sign In</Link>
        <Link to="/signup" style={styles.btnLink} onClick={() => setIsOpen(false)}>Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;