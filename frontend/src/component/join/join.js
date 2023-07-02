import React, { useState } from 'react'
import "./join.css"
import {Link} from "react-router-dom"



let user;

const sendUser=()=>{
    user = document.getElementById("joinInput").value 
    document.getElementById('joinInput').value = ""
}



function join() {

    const [Name,setName] = useState


  return (
    <div>
    <div className="App">

        <div>
          <img src="https://my.imimg.com/gifs_new/renewal-header-im-20.jpg" alt="error"></img>
            </div>
             <input  onChange={(e)=>setName(e.target.value)} className='inputsing' id='joinInput'   type="Number" placeholder="+91 Enter Mobile Number"></input>
            <div>
        
            <Link onClick={(event)=> !Name ? event.preventDefault():null} to="/chat">
              <button onClick={sendUser} className='btnsingin'>sing in</button>
            </Link>
           
        </div>

    </div>
    </div>
  )
}

export default join

export{user}