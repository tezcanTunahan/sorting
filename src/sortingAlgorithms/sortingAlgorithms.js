export async function bubbleSort(
  array,
  setArray,
  setCurrentIndex,
  setCurrentIndexTwo
) {
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
      await sleep(30);
    }
  }
}
export async function selectionSort(
  array,
  setArray,
  setCurrentIndex,
  setCurrentIndexTwo
) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    let temp = array[i];
    array[i] = array[lowest];
    setCurrentIndex(i);
    array[lowest] = temp;
    setCurrentIndexTwo(lowest);
    setArray([...array]);
    await sleep(100);
  }
}
export async function insertionSort(
  array,
  setArray,
  setCurrentIndex,
  setCurrentIndexTwo
) {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
    setArray([...array]);
    setCurrentIndexTwo(j + 1);
    setCurrentIndex(j);
    await sleep(100);
  }
}

//https://flaviocopes.com/how-to-slow-loop-javascript/
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
