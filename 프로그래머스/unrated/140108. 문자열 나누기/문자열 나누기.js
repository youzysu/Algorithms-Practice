function solution(s) {
  let count = 0;
  let firstCount = 0;
  let firstPointer = 0;
  let lengthOfSubstring = 0;

  for (let index = 0; index < s.length; index++) {
    lengthOfSubstring += 1;
    const firstChar = s[firstPointer];
    const currentChar = s[index];

    if (currentChar === firstChar) {
      firstCount += 1;
    } else {
      const OtherCount = lengthOfSubstring - firstCount;
      if (firstCount === OtherCount) {
        firstPointer = index + 1;
        lengthOfSubstring = 0;
        firstCount = 0;
        count += 1;
      }
    }
  }
  if (lengthOfSubstring) count += 1;
  return count;
}