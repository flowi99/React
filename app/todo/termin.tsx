import React, {useState} from "react";


interface TerminProps {
    warning?: string
}

export function Termin({warning}: TerminProps) {

    const [termin, setTermin] = useState(3)

    return (
        <div>Tage bis zum Termin: {termin}</div>

    );
}