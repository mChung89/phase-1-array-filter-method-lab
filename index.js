// Code your solution here
function findMatching(array, string) {
    return array.filter(word => word.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string) {
    return array.filter(word => word.substring(0,2).indexOf(string) !== -1)
}

function matchName(array, string) {
    return array.filter(word => word.name === string)
}