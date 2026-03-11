import { useState } from "react";
import axios from "axios";

function App(){

const [file,setFile]=useState(null);
const [email,setEmail]=useState("");
const [msg,setMsg]=useState("");

const submit=async()=>{

const form=new FormData();

form.append("file",file);
form.append("email",email);

setMsg("Processing...");

try{

await axios.post("http://localhost:8000/analyze",form);

setMsg("Summary sent to email!");

}catch{

setMsg("Error occurred");

}

};

return(

<div style={{padding:40}}>

<h2>Sales Insight Automator</h2>

<input type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<br/><br/>

<input
type="email"
placeholder="Recipient Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<button onClick={submit}>Generate Insight</button>

<p>{msg}</p>

</div>

);

}

export default App;