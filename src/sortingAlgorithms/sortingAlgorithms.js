
function bubbleSort (array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]){
                swap(array,j)
            }
        }
    }

    return array
}

function swap(arr,a){
    let temp = arr[a]
    arr[a] = arr[a+1]
    arr[a+1] = temp
}


    
export {bubbleSort}