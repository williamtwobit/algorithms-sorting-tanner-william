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

const arr = [15,4,8,16,42,23];

// bubbleSort(arr);