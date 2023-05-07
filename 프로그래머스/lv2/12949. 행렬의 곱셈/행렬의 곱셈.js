function solution(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    result[i] = [];

    for (let j = 0; j < arr2[0].length; j++) {
      const sum = arr1[i].reduce((acc, cur, k) => {
        return acc + cur * arr2[k][j];
      }, 0);

      result[i][j] = sum;
    }
  }

  return result;
}