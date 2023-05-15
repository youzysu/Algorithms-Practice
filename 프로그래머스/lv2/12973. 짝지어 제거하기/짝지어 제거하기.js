function solution(s) {
    const answer = []
    
    for (const char of s) {
        if (!answer.length) {
            answer.push(char)
            continue;
        }
        if (char === answer[answer.length - 1]) {
            answer.pop()
            continue;
        }
        
        answer.push(char)
    }
    
    console.log(answer)
    return answer.length ? 0 : 1
}