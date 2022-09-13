function countTruthy(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element !== 0 && element !== "" && element !== undefined) {
            newArr.push(element)
        }
    }
}
module.exports = countTruthy