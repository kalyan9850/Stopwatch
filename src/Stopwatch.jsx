import React, { useEffect, useState } from "react";

function Stopwatch() {

    let[time,setTime] = useState(0);
    let [isactive,setIsactive] = useState(false);
    let [isstop,setIstop] = useState(false);
    let [pause,setPause] = useState(true)
    let timeout = null;

    function buttonB() {                                     
       timeout =  setTimeout(()=>{return setTime(time+1)},1000);
    }

    console.log(isactive);

    function startButton() {
        clearInterval(buttonB)
        setIsactive(true);
    } 

    function resetButton() {
        setTime(time = 0);
    }

    function stopButton() {
        clearTimeout(timeout);
        stButton();
    }
    
    function stButton() {
        setIstop(true);
        console.log(isstop);
        setTime(0);
        setIsactive(false)
        setPause(true)
    }

    function pauseButton() {
        clearTimeout(timeout);
        setIsactive(false)
        setPause(false)

    }

    useEffect(()=>{
        if(isactive){
            buttonB();
        }
        
    },[time,isactive,pause])

    return(
        <>
        <div className="main">
        {isactive ? time : pause ? 0 : time}

        </div>
        <div className="buttons">

            <button onClick={()=>startButton()} className="bt">Start</button>    
            <button onClick={()=>pauseButton()}className="bt">Pause</button>
            <button onClick={()=>stopButton()}className="bt">Stop</button>
            <button onClick={()=>resetButton()}className="bt">Reset</button>
            </div>
        </>
    )
}

export default Stopwatch;