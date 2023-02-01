function solution(board, moves) {
  let count = 0;
  const stack = [];

  moves.forEach((move) => {
    const index = move - 1;

    for (let line of board) {
      if (line[index]) {
        if (line[index] === stack[stack.length - 1]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(line[index]);
        }
        line[index] = 0;
        return;
      }
    }
  });
  console.log(count);
  return count;
}