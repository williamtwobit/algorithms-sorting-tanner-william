const arr = [15,4,8,16,42,23];

function swap(array, i,j){
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bubbleSort(array){
  let swaps = 0;

  for(let i=0; i<array.length; i++){
    console.log('position:',i,'   Value:', array[i]);
    console.log('position:',i+1,'   Value:', array[i+1]);
    if(array[i] > array[i+1]){
      swap(array,i,i+1);
      swaps++;
    }
    console.log('After swap:', array);
  }

  if(swaps > 0){
    return bubbleSort(array);
  }
  console.log('Finished Product:', array);
  return array;
}

// bubbleSort(arr);

function merge(left, right, arr){
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      arr[outputIndex++] = left[leftIndex++];
    }else{
      arr[outputIndex++] = right[rightIndex++];
    }
  }

  for(let i = leftIndex; i < left.length; i++){
    arr[outputIndex++] = left[i];
  }

  for(let i = rightIndex; i < right.length; i++){
    arr[outputIndex++] = right[i];
  }

  return arr;
}

function mergeSort(arr) {
  if(arr.length <= 1){
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, arr);
}

// mergeSort(arr);


function quickSort(array, start=0, end=array.length){
  start = start;
  end = end;
  if(start >= end){
    return array;
  }
  const middle = partition(array,start,end);
  array = quickSort(array,start,middle);
  array = quickSort(array,middle+1,end);
  return array;
}

function partition(array,start,end){
  const pivot = array[end-1];
  let j = start;
  for(let i=start; i<end-1; i++){
    if(array[i] <= pivot){
      swap(array,i,j);
      j++;
    }
  }
  swap(array,end-1,j);
  return j;
}