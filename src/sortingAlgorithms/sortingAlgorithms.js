
function  bubbleSort  (arr,animatedArr){
    
    const arrayBars = document.getElementsByClassName("array-bar")
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length -i; j++){
            if(arr[j] > arr[j +1 ]){
                setTimeout(()=>{
                    swap(arr,j)
                    arrayBars[i].style.backgroundColor = "black" 
                    arrayBars[j].style.backgroundColor = "black" 
                    setTimeout(()=>{
                        arrayBars[i].style.backgroundColor = "blueviolet" 
                        arrayBars[j].style.backgroundColor = "blueviolet"  
                    },(i+1)*50)
                },i*50)
            }
        }
    }
    return arr
}

function swap(arr,j){
    let temp = arr[j]   
    arr[j] = arr[j+1]
    arr[j+1] = temp
}



export {bubbleSort}