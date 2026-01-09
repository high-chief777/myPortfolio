const Ring = ({ rating }) => {
  const percentage = rating / 5;
  const radius = 15;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percentage);

  return (
    <svg width="40" height="40">
      {}
      <circle
        cx="20"
        cy="20"
        r={radius}
        stroke="#d1d5db"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {}
      <circle
        cx="20"
        cy="20"
        r={radius}
        stroke="#f59e0b"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 20 20)" 
      />
      {}
      <circle
        cx="20"
        cy="20"
        r={radius - strokeWidth}
        fill="#f9fafb"
      />
    </svg>
  );
};

const CV = () => {
  const skills = [
    { name: "Computer Systems", rating: 3 },
    { name: "Software Development", rating: 3.5 },
    { name: "Engineering Principles", rating: 3 },
    { name: "Analytical Skills", rating: 3 },
    { name: "Problem-Solving", rating: 4 }
  ];

  const languages = [
    { name: "Nepali", rating: 5 },
    { name: "English", rating: 4 },
    { name: "Hindi", rating: 4.5 }
  ];

  return (
    <div id="cv" style={{
      maxWidth: "900px",
      margin: "40px auto",
      background: "#f9fafb",
      color: "#111827",
      fontFamily: "system-ui, Arial, sans-serif",
      display: "flex",
      padding: "60px 40px 40px",
      gap: "30px",
      borderRadius: "10px"
    }}>
      <div style={{
        width: "30%",
        paddingRight: "25px",
        borderRight: "2px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        gap: "18px"
      }}>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <img src="/me.jpg" style={{
            width: "140px",
            height: "130px",
            borderRadius: "50%",
            objectFit: "cover"
          }} />
        </div>

        <div>
          <h4 style={{ margin: "0 0 6px" }}>DETAILS</h4>
          <p style={{ margin: "4px 0" }}>Rainas, Lamjung, Nepal</p>
          <p style={{ margin: "4px 0" }}>9748308158</p>
          <p style={{ margin: "4px 0" }}>samipghimire964@gmail.com</p>
          <p style={{ margin: "4px 0" }}>DOB: 06/08/2005</p>
          <p style={{ margin: "4px 0" }}>Nationality: Nepalese</p>
        </div>

        <div>
          <h4 style={{ margin: "0 0 6px" }}>LINKS</h4>
          <a href="https://www.linkedin.com/in/samip-ghimire-24b53734a" target="_blank" style={{ margin: "4px 0", color: "#2563eb", textDecoration: "none" }}>
            LinkedIn
          </a>
        </div>

        <div>
          <h4 style={{ margin: "0 0 6px" }}>SKILLS</h4>
          {skills.map(skill => (
            <div key={skill.name} style={{ margin: "6px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>{skill.name}</span>
              <Ring rating={skill.rating} />
            </div>
          ))}
        </div>

        <div>
          <h4 style={{ margin: "0 0 6px" }}>LANGUAGES</h4>
          {languages.map(lang => (
            <div key={lang.name} style={{ margin: "6px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>{lang.name}</span>
              <Ring rating={lang.rating} />
            </div>
          ))}
        </div>

        <div>
          <h4 style={{ margin: "0 0 6px" }}>HOBBIES</h4>
          <p style={{ margin: "4px 0" }}>Music, Chess, Gaming</p>
        </div>
      </div>

      <div style={{
        width: "70%",
        paddingLeft: "25px",
        display: "flex",
        flexDirection: "column",
        gap: "22px"
      }}>
        <div>
          <h1 style={{ margin: "0", fontSize: "32px" }}>Samip Ghimire</h1>
          <p style={{ margin: "6px 0", color: "#4b5563" }}>Student</p>
        </div>

        <div>
          <h3 style={{ margin: "0 0 6px" }}>PROFILE</h3>
          <p style={{ margin: "0", lineHeight: "1.6" }}>
            Student with a focus on Computer Engineering at Tribhuvan University,
            aiming to transition into the tech industry. Proven analytical skills
            highlighted by participation as a finalist in the National Mathematics
            Olympiad. Currently seeking opportunities to develop expertise and
            contribute to a major tech company.
          </p>
        </div>

        <div>
          <h3 style={{ margin: "0 0 6px" }}>EDUCATION</h3>
          <p style={{ margin: "6px 0" }}>
            <strong>Computer Engineering</strong><br/>
            Tribhuvan University<br/>
            Feb 2024 – Feb 2028
          </p>
          <p style={{ margin: "6px 0" }}>
            <strong>High School</strong><br/>
            Capital College and Research Center, Kathmandu<br/>
            Jul 2020 – May 2022
          </p>
          <p style={{ margin: "6px 0" }}>CGPA: 3.80</p>
        </div>

        <div>
          <h3 style={{ margin: "0 0 6px" }}>PROJECTS</h3>
          <p style={{ margin: "4px 0" }}>Leads Tracker Chrome Extension</p>
          <p style={{ margin: "4px 0" }}>To-Do List</p>
          <p style={{ margin: "4px 0" }}>Real Estate Home Finder</p>
          <p style={{ margin: "4px 0" }}>Strong Password Generator</p>
          <p style={{ margin: "4px 0" }}>Single Player Blackjack</p>
        </div>
      </div>
    </div>
  )
}

export default CV;
