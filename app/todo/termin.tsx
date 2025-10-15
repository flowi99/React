import React, {useState} from "react";


interface TerminProps {
    warning?: string
}

export function Termin({warning}: TerminProps) {

    const [termin, setTermin] = useState(3)





    return (
<>

        <div>Tage bis zum Termin: {termin} {termin <= 2 && <span style={{color: "red"}}>Knapp!!!</span>}


        <button type='button' onClick={() => {setTermin(termin + 1)}}>+</button>
        <button type='button' onClick={() => {setTermin(termin - 1)}}>-</button>

        </div>

</>

    );
}