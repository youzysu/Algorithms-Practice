function solution(board, moves) {
    const stack = []
    let answer = 0
    for (let move of moves) {
        // move = 1
        for (let line of board) {
            if (line[move - 1]) {
                if (stack[stack.length - 1] === line[move - 1]) {
                    stack.pop()
                    answer += 2
                } else {
                    stack.push(line[move - 1])
                }
                line[move - 1] = 0
                break;
            }
        }
    }
    return answer

}