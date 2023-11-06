import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converting To Upperacse","success");
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked "+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converting To LowerCase","success");
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
        props.showAlert("Converting To Uppercase","success");
    }
    const handleClearClick = ()=>{
        console.log("Clear was clicked "+text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Has Been Cleared","success");
    }
    const handleExtraSpaces = ()=>{
        console.log("I am copy");
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extraspace Has Been Cleared","success");
    }

    const [text, setText] = useState('Enter text here2');

    return (
        <>
        <div className="container" style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white'}}>
            <h1 style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white'}}>{props.heading}</h1>
            <div class="mb-3">
                <textarea class="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                Convert To Uppercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>
                Convert To Lowercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>
                Clear Your Text
            </button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} id="myBox">
                Extra Spaces
            </button>

        </div>
        <div className="container my-2">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length}</p>
            <p>{text.split(" ").length*0.008} Minutes To Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
