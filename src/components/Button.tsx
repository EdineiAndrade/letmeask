import { useState } from "react";


export function Button() {

    const [couter, setCouter] = useState(0)
    function increment() {
        setCouter(couter + 1);
        console.log(couter);
    }


    return (
        <button onClick={increment}>
            {couter}
        </button>
    )
}