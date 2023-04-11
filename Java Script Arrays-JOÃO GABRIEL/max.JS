function max(array) {
    let maxNum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxNum) {
        maxNum = array[i];
      }
    }
    return maxNum;
  }