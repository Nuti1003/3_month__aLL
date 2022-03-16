// function printArrayValues(arr) {
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i], 'array');
//     }
// }

// [printArrayValues([1, 2, 3])]


let i = 0
function printArrayValues(arr){
    if(i !== arr.length){
        console.log(arr[i++], 'array');
        printArrayValues(arr)
    }
}

printArrayValues([1,2,3,4])