export default function RootLayout({children}:{children:React.ReactNode}) {
return (
<html lang="en">
<body style={{margin:0,fontFamily:"Arial, sans-serif",background:"#07111f",color:"#fff"}}>
{children}
</body>
</html>);
}
