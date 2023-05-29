import React, {useState} from 'react'





export default function TextForm(props) {

    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")

    }

    const handleLoClick=()=>{
      //console.log("Uppercase was clicked" + text)
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase", "success")
  }

    const handleOnChange=(event)=>{
      //console.log("on change")
      
      setText(event.target.value);
  }

  const [text, setText]= useState('');

  return (
    <>
      

    <div className= "container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Enter the Text Here to Change</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="mybox" rows="8"></textarea>
        </div>
        <button classname= "btn btn-primary mx-1" onClick= {handleUpClick}>Convert to Uppercase</button>
        <button classname= "btn btn-primary mx-1" onClick= {handleLoClick}>Convert to Lowercase</button>

      
    </div>
    <div clasname= "container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>{props.heading}</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Total Read Time</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: "Enter something in the aboue textbox to analyze"}</p>

    </div>
    </>
  )
}
