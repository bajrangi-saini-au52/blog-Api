import React from 'react'
import "./chat.css"
// import ReactScrollToBottom from "react-scroll-bottom"

function chat() {

  const send = ()=>{
    const message = document.getElementById("chatInput").value 
    if(!message){
        alert("please Enter text")
    }

    document.getElementById("chatInput").value = "";

  }




  return (
    
    <div className="chatPage">

        <div className="chatContainer">
            <div className="header">
              <h2>BLOG APP</h2>
               <a href="/"><img src='' alt="close"/></a>
            </div>


            {/* <ReactScrollToBottom className="chatBox">
              {message.map((item,i)=> <Message user={item.id === id?``:item.user} message = {item.message} classs={item.id === id?`rigth`:`left`}/>)}
            </ReactScrollToBottom> */}



            <div className="inputBox">
                <input onKeyPress={(event)=>event.key === `Enter` ? send():null} type="text" name='' id="chatInput"/> 
                <button onClick={send} className='sendBtn'>Send</button>
            </div>
 
        </div>                  
                      
                 
    </div> 
      
    
  )
}

export default chat
