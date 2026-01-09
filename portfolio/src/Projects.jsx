import projects from './ImageData.jsx'

const Projects = () => {
    return (
        <div id="projects">
            <h2 style={{color:"#bbc9e4ff", textAlign:"center", marginBottom:"30px"}}>Projects</h2>
            <div style={{
                padding:"20px",
                margin:"0 auto",
                display:"flex",
                flexWrap:"wrap",
                justifyContent:"space-around",
                gap:"20px"
            }}>
                {projects.map((p,i)=>(
                    <div key={i} style={{
                        width:"300px",
                        background: "linear-gradient(145deg, #1f2937, #111827)",
                        border:"2px solid #444",
                        boxShadow:"0 6px 20px rgba(0,0,0,0.6)",
                        borderRadius:"15px",
                        textAlign:"center",
                        padding:"15px",
                        transition:"all 0.3s ease",
                        cursor:"pointer"
                    }}
                    onMouseEnter={e=>{
                        e.currentTarget.style.transform = "translateY(-6px)";
                        e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.8)";
                    }}
                    onMouseLeave={e=>{
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.6)";
                    }}
                    >
                        <div>
                            <img src={p.img} alt={p.name} style={{
                                width:"100%",
                                height:"180px",
                                objectFit:"cover",
                                borderRadius:"12px",
                                border:"1px solid #555"
                            }} />
                        </div>
                        <div>
                            <h3 style={{color:"#e5e7eb", margin:"12px 0 6px", fontSize:"1.3em"}}>{p.name}</h3>
                            <p style={{color:"#9ca3af", margin:"0 10px 12px", fontSize:"0.95em"}}>{p.description}</p>
                        </div>
                        <div>
                            <a href={p.link} target="_blank"
                               style={{
                                   display:"inline-block",
                                   padding:"7px 14px",
                                   background:"#111827",
                                   color:"#38bdf8",
                                   borderRadius:"10px",
                                   textDecoration:"none",
                                   fontWeight:"bold",
                                   transition:"all 0.3s"
                               }}
                               onMouseEnter={e=>{
                                   e.currentTarget.style.background = "#38bdf8";
                                   e.currentTarget.style.color = "#111827";
                               }}
                               onMouseLeave={e=>{
                                   e.currentTarget.style.background = "#111827";
                                   e.currentTarget.style.color = "#38bdf8";
                               }}
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
