import { useState, useEffect } from "react";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 2) % 360);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      style={{
        margin: "40px auto",
        width: "700px",
        display: "flex",
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
        gap: "25px",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ position: "relative", width: "250px", height: "250px" }}>
        
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "280px",
            height: "280px",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: `conic-gradient(
              from ${angle}deg,
              #ff006e,
              #8338ec,
              #3a86ff,
              #06ffa5,
              #ffbe0b,
              #ff006e
            )`,
            filter: "blur(20px)",
            opacity: "0.6",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "255px",
            height: "247px",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: `conic-gradient(
              from ${angle}deg,
              #ff006e,
              #8338ec,
              #3a86ff,
              #06ffa5,
              #ffbe0b,
              #ff006e
            )`,
            filter: "drop-shadow(0 0 15px rgba(255, 0, 110, 0.8))",
            zIndex: 1,
          }}
        />

        <img
          src="./me.jpg"
          alt="Me"
          style={{
            width: "250px",
            height: "245px",
            objectFit: "cover",
            borderRadius: "50%",
            position: "relative",
            zIndex: 2,
            boxShadow: "0 6px 15px rgba(0,0,0,0.5)",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#e5e7eb",
        }}
      >
        <h1 style={{ margin: "0", fontSize: "2.2em" }}>
          Samip Ghimire
        </h1>

        <h3
          style={{
            color: "#9ca3af",
            margin: "5px 0 15px",
            fontWeight: "400",
            fontSize: "1.1em",
          }}
        >
          Web Developer & ML Enthusiast
        </h3>

        <p
          style={{
            maxWidth: "350px",
            lineHeight: "1.6",
            color: "#d1d5db",
          }}
        >
          I am a Computer Engineering student at Tribhuvan University with a
          focus on web development and machine learning. I enjoy creating
          interactive web applications, exploring ML models, and applying
          technology to solve real-world problems.
        </p>
      </div>
    </div>
  );
};

export default Hero;