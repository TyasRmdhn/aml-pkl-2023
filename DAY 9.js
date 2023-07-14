function testNum(yas) {
  let result;
  if (yas > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}

console.log(testNum(5));