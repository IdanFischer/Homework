// let favoriteFruits = [
// "mango",        // 0
// "lychee",       // 1
// "rambutan",     // 2
// "papaya"        // 3
// ]
// // 2. Create a function that removes the 
// // first element of the array below and adds “kiwi” to the end of the array
// function moveArray(arr) {
//     // T
//     arr.shift()
//     arr.push("kiwi")
//     return arr
// }
// also confused a bit, will ask too

// let completeArray = moveArray(favoriteFruits)
// console.log(completeArray)


// 1. Using your loop of choice. Create a function that prints the pyramid below. 
// function emojiPyramid() {
//     let emoji = "😈"
//     for(let i = 0; i < 5; i++) {
//         console.log(emoji)
//         emoji += "😈"
//     }
// }
// still a  little confused, will follow up

// emojiPyramid()

// Write a function named assignGrade, that takes one argument, a number score.
// Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.” 
// Invoke that function for a few different scores and log the result to make sure it works. 
function assignGrade(numberScore) {
        if (numberScore >= 90) {
            console.log("A")
        }
        else if (numberScore >= 80) {
            console.log("B")
        } 
        else if (numberScore >= 70) {
            console.log("C")
        }
        else if (numberScore >= 60) {
            console.log("D")
        }
        else if (numberScore >= 50) {
            console.log("F")
        }
    }

assignGrade(66)
// tried with switch but couldnt figure out how to do it
