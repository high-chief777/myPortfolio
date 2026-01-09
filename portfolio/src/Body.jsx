import { useState } from 'react'

const Hero = () => {
  const [hover, setHover] = useState(false)

  return (
    <div
      id="home"
      style={{
        margin: "40px auto",
        width: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "25px",
        borderRadius: "20px",
        background: "linear-gradient(145deg, #1f2937, #111827)",
        boxShadow: hover
          ? "0 16px 35px rgba(0,0,0,0.5)"
          : "0 10px 25px rgba(0,0,0,0.4)",
        border: "2px solid #374151",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src="./me.jpg"
        alt="Me"
        style={{
          width: "250px",
          height: "250px",
          objectFit: "cover",
          borderRadius: "50%",
          border: "3px solid #38bdf8",
          boxShadow: "0 6px 15px rgba(0,0,0,0.5)",
          marginBottom: "20px",
        }}
      />
      <h1 style={{ color: "#e5e7eb", margin: "0", fontSize: "2.2em" }}>
        Samip Ghimire
      </h1>
      <h3
        style={{
          color: "#9ca3af",
          marginTop: "5px",
          fontWeight: "400",
          fontSize: "1.1em",
        }}
      >
        Web Developer
      </h3>
    </div>
  )
}

export default Hero
