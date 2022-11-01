// Code Keypad Component Here

function Keypad (){
    // const handlePassword = () => {console.log("Entering Password...")}

    return (
        <div>
            <input type="text" onChange={() => {console.log("Entering Password...")}}></input>
        </div>
    )
}

export default Keypad;