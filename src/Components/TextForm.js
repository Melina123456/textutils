import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const countSentences = () => {
        return text.split(/[.?!]/g).filter(Boolean).length;
    }
    const handleFiClick =()=>{
       let newText = text.split(" ");
       for (var i = 0; i < newText.length; i++) {
       newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
       let newText1 = newText.join(" ");
       setText(newText1);
       props.showAlert("Converted to Capitalized case", "success");
    }
    const downloadFile = () => {
        const link = document.createElement("a");
        const content = document.querySelector("textarea").value;
        const file = new Blob([content], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = "myfile.txt";
        link.click();
        URL.revokeObjectURL(link.href);
        props.showAlert("Downloaded", "success");
     };
     const handleClearClick =()=>{
        let newText ='';
        setText(newText);
        props.showAlert("Text has been cleared.", "success");
    }
    const handleCopy =()=>{
        var newText=document.getElementById("exampleFormControlTextarea1");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to Clipboard.", "success");
    }
    const handleExtraSpace =()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed.", "success");
    }
    // const countParagraphs = () =>{
    //     return text.split(/\n\s*\n/g).filter(Boolean).length;
    //   }
    const[text,setText]=useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading} </h1>
    <div className="form-group">
    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
    </div>
    <button className="btn btn-success my-3 mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-success my-3 mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
    <button className="btn btn-success my-3 mx-2" onClick={handleFiClick}>Capitalized Case</button>
    <button className="btn btn-success my-3 mx-2" onClick={downloadFile}>Download</button>
    <button className="btn btn-success my-3 mx-2" onClick={handleClearClick} >Clear</button>
    <button className="btn btn-success my-3 mx-2" onClick={handleCopy} >Copy Text</button>
    <button className="btn btn-success my-3 mx-2" onClick={handleExtraSpace} >Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>Your text summary </h1>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008*text.split(" ").length} min will be taken to read.</p>
        <p>No of sentences is : {countSentences()}</p>
        {/* <p>No of Paragraphs: {countParagraphs()}</p> */}
        <h2>Your text preview:</h2>
        <p>{text.length>0?text:"Enter something on the box to preview!!!"}</p>
    </div>
    </>
  )
}
