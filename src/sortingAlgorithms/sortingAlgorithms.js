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
// export async function selectionSort(
//   array,
//   setArray,
//   setCurrentIndex,
//   setCurrentIndexTwo
// ) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] < array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//         setArray([...array]);
//         setCurrentIndex(j);
//         setCurrentIndexTwo(j + 1);
//       }
//       await sleep(30);
//     }
//   }
// }

//https://flaviocopes.com/how-to-slow-loop-javascript/
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
