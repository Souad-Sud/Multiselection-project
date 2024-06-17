import React, { useState } from "react";
import data from "./data"

const Accordian = ()=>{
    const [selected, setSelect] = useState(null);
    const[enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId){
        console.log(getCurrentId);
        setSelect(getCurrentId === selected ? null : getCurrentId);
        

    }

    function handlMultiSelection(getCurrentId){
        let copyMultipl = [...multiple];

        const findIndexOfCurrentId = copyMultipl.indexOf(getCurrentId)
        if(findIndexOfCurrentId === -1) copyMultipl.push(getCurrentId) 
            else copyMultipl.splice(findIndexOfCurrentId , 1)     
        // remove only one item
            setMultiple(copyMultipl);
       

    }
    console.log(selected);

    return(
        <div className="wrapper">
            <button onClick={() =>setEnableMultiSelection(!enableMultiSelection)}>Enable multiselection</button>
            <div className="accordian">


                {
                    data && data.length  >  0 ?
                     (data.map(dataItem => (
                      <div className="item"> 
                    <div 
                    onClick={enableMultiSelection 
                        ? () => handlMultiSelection(dataItem.id)
                        : () => handleSingleSelection(dataItem.id)
                        }
                     className="title">
                        <h2>{dataItem.question}</h2>
                        <span>+</span>
                    </div>
                    {
                        enableMultiSelection 
                        ? multiple.indexOf(dataItem.id) !== -1 && (
                        <div className="content">{dataItem.answer}</div> )
                         :  selected === dataItem.id && (
                         <div className="content">{dataItem.answer}</div>
 
                    )}
                     

                    </div>
                    ))
                    ) : (
                    <div>No data found!</div>
                        
               )}

            </div>

        </div>

       

    )
}

export default Accordian