
export default function StatCard({title,value}:{title:string,value:string}){
 return (
  <div style={{background:"#11213b",padding:16,borderRadius:12}}>
   <div style={{fontSize:13,opacity:.7}}>{title}</div>
   <div style={{fontSize:30,fontWeight:700}}>{value}</div>
  </div>
 )
}
