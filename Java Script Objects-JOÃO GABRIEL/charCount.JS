function charCount(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (/[a-z0-9]/.test(char)) {
        if (obj[char] > 0) {
          obj[char]++;
        } else {
          obj[char] = 1;
        }
      }
    }
    return obj;
  }