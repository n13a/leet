var getConcatenation = array=> {
    let arr = []
    for(let i = 0; i <= 1; i++){
        for(let j = 0; j < array.length; j++){
            arr.push(array[j])
        }
    }
    return arr
}

console.log(getConcatenation([1,3,2,1]))

// Runtime: 83 ms, faster than 92.14% of JavaScript online submissions for Concatenation of Array.
// Memory Usage: 45 MB, less than 73.78% of JavaScript online submissions for Concatenation of Array.