const SkillsBanner = () => {
  const skills = [
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ]

  return (
    <div id="skills" style={{ margin: "40px auto", width: "90%" }}>
      <h2 style={{ color: "#bbc9e4ff", textAlign: "center", marginBottom: "20px" }}>Skills</h2>
      <div
        style={{
          padding: "20px 0",
          backgroundColor: "#1f2937",
          overflow: "hidden",
          borderRadius: "15px",
          border: "2px solid #aaa",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            animation: "scroll 20s linear infinite",
            gap: "40px",
          }}
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "5px 10px",
                borderRadius: "10px",
                backgroundColor: "#111827",
                border: "2px solid #aaa",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                style={{ width: "40px", height: "40px", marginBottom: "5px" }}
              />
              <span style={{ color: "#38bdf8", fontWeight: "bold" }}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  )
}

export default SkillsBanner
