function mostFreqChar(str) {
    let charFreq = {};
    let maxChar = '';
    let maxFreq = 0;
  
    for (let i = 0; i < str.length; i++) {
      let currentChar = str.charAt(i);
      if (charFreq[currentChar]) {
        charFreq[currentChar]++;
      } else {
        charFreq[currentChar] = 1;
      }
      if (charFreq[currentChar] > maxFreq) {
        maxChar = currentChar;
        maxFreq = charFreq[currentChar];
      }
    }
  
    return maxChar;
  }