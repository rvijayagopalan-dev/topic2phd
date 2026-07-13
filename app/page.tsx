
import StatCard from "../components/StatCard";

const planes=[
"Discovery","Literature","Knowledge","Reasoning",
"Innovation","Methodology","Experiments","Validation",
"Writing","Publication","Governance","Analytics"
];

export default function Home(){
return (
<main style={{padding:32}}>
<h1 style={{fontSize:56,marginBottom:0}}>Topic2PhD</h1>
<p style={{color:"#7dd3fc",fontSize:22}}>Autonomous Research Intelligence Platform</p>

<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
<StatCard title="Research Score" value="91%"/>
<StatCard title="Novelty" value="87%"/>
<StatCard title="Evidence" value="94%"/>
<StatCard title="Publication" value="89%"/>
</div>

<div style={{marginTop:24,background:"#0f1c33",padding:20,borderRadius:12}}>
<h2>Start Research</h2>
<input placeholder="Enter research topic..."
style={{width:"100%",padding:14,borderRadius:8,border:"1px solid #345",background:"#081221",color:"#fff"}}/>
<button style={{marginTop:12,padding:"12px 20px",borderRadius:8,background:"#4f46e5",color:"#fff",border:0}}>
Start Topic2PhD
</button>
</div>

<h2 style={{marginTop:30}}>12 Research Intelligence Planes</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
{planes.map(p=>(
<div key={p} style={{background:"#12223f",padding:18,borderRadius:12}}>
<h3>{p}</h3>
<p style={{opacity:.8}}>AI-powered {p.toLowerCase()} capabilities.</p>
</div>
))}
</div>

<div style={{marginTop:30,background:"#0f1c33",padding:20,borderRadius:12}}>
<h2>Autonomous Agent Mesh</h2>
<p>Discovery → Knowledge → Gap Discovery → Hypothesis → Methodology → Experiment → Validation → Writing → Publication</p>
</div>
</main>
)}
