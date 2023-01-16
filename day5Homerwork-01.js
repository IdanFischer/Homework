// Create a function which returns the number of true values there are in an array.

const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

function ifTrue(arr) {
    let myNewArray = []
    for(i = 0; i < arr; i++) {
        if (arr[i] === true)
        myNewArray.push(arr[i])
        

    }
    let finishedLength = myNewArray.length
    return finishedLength
}

console.log(ifTrue(testArray))
