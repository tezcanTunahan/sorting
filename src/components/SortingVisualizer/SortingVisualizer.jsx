import { useState } from "react";
import "./sortingVisualizer.css";
import * as sort from "../../sortingAlgorithms/sortingAlgorithms";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentIndexTwo, setCurrentIndexTwo] = useState(null);

  function resetArray() {
    let tempArr = [];
    setArray([]);
    for (let i = 0; i < 35; i++) {
      tempArr.push(randomIntFromInterval(5, 400));
    }
    setArray(tempArr);
  }
  function onClickBubbleSort() {
    sort.bubbleSort(array, setArray, setCurrentIndex, setCurrentIndexTwo);
  }
  // function onClickSelectionSort() {
  //   sort.selectionSort(array, setArray, setCurrentIndex, setCurrentIndexTwo);
  // }

  //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="sorting-container">
      {array.map((value, idx) => {
        return (
          <div className={` array-bar-container`} key={idx}>
            <div
              className={`${
                currentIndex === idx || currentIndexTwo === idx ? "color" : ""
              } array-bar`}
              style={{ height: `${value}px` }}
            ></div>
          </div>
        );
      })}
      <div className="btn-container">
        <button onClick={resetArray}>Generete new array</button>
        <button onClick={onClickBubbleSort}>Bubble sort</button>
        {/* <button onClick={onClickSelectionSort}>Selection sort</button> */}
        {/* <button onClick={mergeSort}>Merge sort</button> */}
        {/* <button onClick={quickSort}>Quick sort</button> */}
        {/* <button onClick={heapSort}>Heap sort</button> */}
      </div>
    </div>
  );
}

export default SortingVisualizer;
