




// linear search
function linearSearch(arr, target) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
    }
  }

  return index;
}

console.log("index of target is", linearSearch([1, 2, 3, 4, 5], 4)); //3
console.log("index of target is", linearSearch([-5, 2, 10, 4, 5], 10)); //2
console.log("index of target is", linearSearch([-5, 2, 10, 4, 5], 20)); //-1

// bubble sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log("bubble sort", bubbleSort([2, 8, 5, 3, 9, 4, 1]));
console.log("bubble sort", bubbleSort([-5, 2, 10, 4, 5]));
