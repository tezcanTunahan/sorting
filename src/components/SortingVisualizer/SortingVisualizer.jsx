import { useState } from "react"
import "./sortingVisualizer.css"
import * as sort from "../../sortingAlgorithms/sortingAlgorithms"


function SortingVisualizer(){

    const [array,setArray] = useState([])


    function resetArray(){
        let tempArr = []
        setArray([])
        for (let i = 0; i < 350; i++) {
            tempArr.push(getRandomArbitrary(5,600))
        }
        setArray(tempArr)
    }
    function bubbleSort(){
        sort.bubbleSort(array,setArray)
    }
    function mergeSort(){

    }
    function quickSort(){

    }
    function heapSort(){

    }


    //from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return(
        <div className="sorting-container">
            {array.map((value,idx)=>{
                return(
                    <div className="array-bar-container" key={idx}>
                        <div className="array-bar"  style={{height: `${value}px`}}>
                        </div>
                    </div>
                )
            })}
            <div className="btn-container">
                <button onClick={resetArray}>Generete new array</button>
                <button onClick={bubbleSort}>Bubble sort</button>
                <button onClick={mergeSort}>Merge sort</button>
                <button onClick={quickSort}>Quick sort</button>
                <button onClick={heapSort}>Heap sort</button>
            </div>
        </div>
    )
}

export default SortingVisualizer