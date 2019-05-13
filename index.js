function breakOut(array, changeValue, stopValue) {
  for(let i = 0; i<array.length; i++) {
    if(array[i]===stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for(let i=0; i<array.length; i++) {
    if(element===skipValue) {
      continue;
    } else {
      element = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn) {

}
