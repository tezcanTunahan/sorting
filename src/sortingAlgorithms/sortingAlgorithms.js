
function bubbleSort(arr,animatedArr){
    
    const arrayBars = document.getElementsByClassName("array-bar")
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j +1 ]){
                let temp = arr[j]   
                arr[j] = arr[j+1]
                arr[j+1] = temp
                
                setTimeout(()=>{
                    arrayBars[i].style.backgroundColor = "red" 
                    arrayBars[j].style.backgroundColor = "red" 
                    // let tempHeight = arr[j].style.height  
                    // arrayBars[j].style.height = arrayBars[i].style.height
                    // arrayBars[j+1].style.height = tempHeight

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




export {bubbleSort}