function breakOut(array, changeValue, stopValue) {
  for(let i = 0; i<array.length; i++) {
    if(array[i]===stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
}

function keepGoing(array, changeValue, skipValue) {

}

function findBy(array, findFn) {

}
