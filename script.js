const getSecondLargestNumber = (arr = []) => {
    if (arr.length < 2) return -Infinity;

    let largestNumber = -Infinity;
    let secondLargestNumber = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            secondLargestNumber = largestNumber;
            largestNumber = arr[i];
        } else if (arr[i] > secondLargestNumber && arr[i] !== largestNumber) {
            secondLargestNumber = arr[i];
        }
    }

    return secondLargestNumber === -Infinity ? -Infinity : secondLargestNumber;
}