import React, { useState } from 'react';


export default function TextForm(props) {

    const handleOnChange = (event) => {
        finalText(event.target.value)
    }

    const handleUpClick = () => {
        let newText = initialText.toUpperCase();
        finalText(newText);
    }

    const handleLowerClick = () => {
        let newText = initialText.toLowerCase();
        finalText(newText);
    }

    const [initialText, finalText] = useState("");

    return (

        <>
        <div className="mb-3 container my-4 mx-4">
            <h3>{props.heading}</h3>
            <textarea className="form-control" value={initialText} onChange={handleOnChange} id="mybox" rows="10"></textarea>
            <button className="btn btn-primary my-4" onClick={handleUpClick}>Covert To UpperCase</button>
            <button className="btn btn-success my-4 mx-4" onClick={handleLowerClick}>Covert To LowerCase</button>
        </div>
        <div className="container my-4 mx-4">
            <h3>Your Text Summary </h3>
            <p> {initialText.split(" ").length} words and {initialText.length} characters are there in your text </p>
            <p>Time to read : {0.008*initialText.split(" ").length} minutes</p>
            <p>
                <h3>Preview</h3>
                {initialText}
            </p>
        </div>
        </>

    );
}
