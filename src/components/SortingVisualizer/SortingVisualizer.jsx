import { useState } from "react"
import "./sortingVisualizer.css"

function SortingVisualizer(){

    const [array,setArray] = useState([])


    function resetArray(){
        let tempArr = []
        setArray([])
        for (let i = 0; i < 100; i++) {
            tempArr.push(getRandomArbitrary(5,500))
        }
        setArray(tempArr)
    }

    //from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return(
        <div className="sorting-container">
            {array.map((value,idx)=>{
                return(
                    <div className="array-bar-container">
                        <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                        </div>
                    </div>
                )
            })}
            <button onClick={resetArray}>reset</button>
        </div>
    )
}

export default SortingVisualizer