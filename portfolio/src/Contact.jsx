const Contact = () => {
    const iconStyle = {
        width: "25px",
        height: "25px",
        marginRight: "12px",
        verticalAlign: "middle"
    }

    return (
        <div id="contact" style={{ textAlign: "center", marginTop: "40px" }}>
            <h2 style={{ color: "#94a8d1ff", marginBottom: "20px" }}>Contact Me</h2>

            <div style={{
                padding: "25px",
                maxWidth: "150px",
                margin: "0 auto",
                backgroundColor: "#1f2937",
                borderRadius: "15px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)"
            }}>
                <p style={{ color: "#9ca3af", marginBottom: "15px", textAlign: "left" }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" style={iconStyle} />
                    <a href="mailto:samipghimire864@gmail.com" style={{ color: "#38bdf8", textDecoration: "none" }}>
                        E-Mail
                    </a>
                </p>

                <p style={{ color: "#9ca3af", marginBottom: "15px", textAlign: "left" }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={iconStyle} />
                    <a href="https://github.com/high-chief777" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8", textDecoration: "none" }}>
                        GitHub
                    </a>
                </p>

                <p style={{ color: "#9ca3af", textAlign: "left" }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={iconStyle} />
                    <a href="https://www.linkedin.com/in/samip-ghimire-24b53734a" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8", textDecoration: "none" }}>
                        LinkedIn Profile
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Contact
