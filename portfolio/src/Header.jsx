import React from "react";

const Header = () => {
  const handleCVClick = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    link.click();
  };

  return (
    <header style={{
      display: "block",
      zIndex: 9999,
      height: "60px",
      top: 0,
      position: "sticky",
      width: "100%"
    }}>
      <nav>
        <ul style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          margin: 0,
          padding: 0
        }}>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li>
            <a href="#" onClick={handleCVClick} style={{ cursor: "pointer" }}>
              Download CV
            </a>
          </li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;