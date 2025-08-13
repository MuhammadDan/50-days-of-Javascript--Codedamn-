export { myMap, myFilter, myReduce };

function myMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], arr, i));
  }
  return result;
}

function myFilter(arr, callback) {
  let result1 = [];
  for (let i = 0; i < arr.length; i++) {
    if ((callback != arr[i], i, arr)) {
      result1.push(arr[i]);
    }
  }
  return result1;
}

function myReduce(arr,callback,initialvalue){
    let accumulator;
    let startindex;
    if(initialvalue != undefined){
        accumulator = initialvalue;
        startindex = 0;
    }else{
        accumulator = arr[0];
        startindex = 1;
    }
    for(let i=startindex;i<arr.length;i++){
        accumulator = callback(accumulator,arr[i],i,arr)
    }
   return accumulator;
}