import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick =()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success", "Converted to UpperCase.")
    }
    const handleLoClick =()=>{
        // console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success", "Converted to LowerCase.")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("success", "Extra spaces removed.")
    }
    const handleFsClick =()=>{
        // console.log("Capitalcase was clicked " + text);
        let newText = text.concat(".") ;
        setText(newText);
        props.showAlert("success", "Full stop added.")
    }
    const handleCopy = () => {
        // console.log(text.value);
        navigator.clipboard.writeText(text);
        props.showAlert("success", "Text Copied to clipboard.")
    }
    const handleSpeech = () => {
        let speech= new SpeechSynthesisUtterance();
        speech.lang= 'en-US';
        speech.text= text;
        speech.rate=1;
        speech.volume=1;
        speech.pitch=1;

        speechSynthesis.speak(speech);
    }
    const handleClearClick =()=>{
        // console.log("ClearText was clicked " + text);
        let newText = ""
        setText(newText);
        props.showAlert("success", "TextBox Cleared.")
    }
    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
  return (
    <> 
    <div className='container' style={{color: props.mode==='dark'? 'white' : '#042743'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'? '#042743' : 'white', color: props.mode==='dark'? 'white' : '#042743'}} id="myBox" rows="8"></  textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick} >Convert to Uppercase</button>

        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick} >Convert to Lowercase</button>

        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove extra spaces</button>
        
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleFsClick} >Put Full Stop</button>

        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>

        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleSpeech}>Convert Text to Speech</button>

        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick} >Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white' : '#042743'}} >
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008* text.split(/\s+/).filter((element)=>{return element.length!==0}).length } minutes to read the text </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in the textbox above to get the preview here"}</p>
    </div>
    </>
  )
}
