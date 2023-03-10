import React ,{useEffect, useState} from 'react'   //react function based component [rfc], useState is used to update a variable value during run time as
                                        // direct assignment updation is not valid in react[works as self.value=data]

export default function TextForm(props) {


    // updating text variable if any changes are made in side the textbox
    const handleOnChange=(event)=>{
        setText(event.target.value)  //updating text variable when input box is updated in any manner
        // console.log(text,event.target.value)

       
    }
    
    // up dating box value when button is clicked
    const handleUpClick =()=>{
        // console.log("button clicked")
        setText(text.toUpperCase())  // updating text to upper when button is clicked
        props.showAlert("text changed to upper","success");   //changing alert message as per input click, warning is functionality of bootstrab
    }

    const handleLoClick =()=>{
        // console.log("button clicked")
        setText(text.toLowerCase())  // updating text to upper when button is clicked
        props.showAlert("text changed to lower","warning");   //changing alert message as per input click
    
    }


    const [text,setText]=useState("Enter your text here")  //is asyn method [updated a little later]
    useEffect(()=>{
        console.log(text.split(" "),text.split(" ").length)
    },[text])
  return (
    <>
        
    <div className='container'>
        <div className="mb-3">
            {/* step 1 inserting text box and increasing size of input box */}
            <label for="myBox" className="form-label"><h1>{props.title}</h1></label>
            {/* <textarea className="form-control" id="myBox" rows="3"></textarea>  [for small box]*/} 
            
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        {/* step 2 adding a button  for further functionality */}
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
        {/* mx-no [mx-1]  will give margin in horizontal, my-no [my-2] will give margin in vertical*/}
      
        <button className="btn btn-primary" onClick={handleLoClick}>convert to lowercase</button>
    </div>
    <div className="container my-3">
        <h1>text summary</h1>
        <p>{text.length == 0 ? 0 :text.split(" ").length} words in text with {text.length} characters {} </p>
        {/* condition written for "['']" as it will give length as 1 */}

    </div>
    
    </>
  )
}
