//your JS code here. If required.
const getLargestNumber = (arr = []) => {
let largestNumber = arr[0];
let secondLargestNumber = arr[0];
for (let i = 0; i < arr.length; i++) {
if (arr[i] > largestNumber) {
secondLargestNumber = largestNumber;
largestNumber = arr[i];
} else if (arr[i] > secondLargestNumber) {
secondLargestNumber = arr[i] I
}
}
return largestNumber;
}