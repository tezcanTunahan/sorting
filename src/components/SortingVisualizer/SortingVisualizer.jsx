import { useState } from "react";
import "./sortingVisualizer.css";
// import { bubbleSort } from "../helpers/algorithms";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentIndexTwo, setCurrentIndexTwo] = useState(null);

  function resetArray() {
    let tempArr = [];
    setArray([]);
    for (let i = 0; i < 100; i++) {
      tempArr.push(randomIntFromInterval(5, 600));
    }
    setArray(tempArr);
  }
  async function onClickBubbleSort() {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          setArray([...array]);
          setCurrentIndex(j);
          setCurrentIndexTwo(j + 1);
        }
        await sleep(5);
      }
    }
  }

  //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //https://flaviocopes.com/how-to-slow-loop-javascript/
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

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
        {/* <button onClick={mergeSort}>Merge sort</button> */}
        {/* <button onClick={quickSort}>Quick sort</button> */}
        {/* <button onClick={heapSort}>Heap sort</button> */}
      </div>
    </div>
  );
}

export default SortingVisualizer;
