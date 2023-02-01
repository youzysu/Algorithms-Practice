// 10 단위로
// 1번 1,2,3,4,5 반복
// 2번 2, (1, 3, 4, 5) 반복
    // 홀수 index는 항상 2, 짝수는 1, 3, 4, 5 반복
// 3번 3 1 2 4 5 (2번씩 반복)
// answer 배열과 가장 많이 일치하는 배열 번호 반환

function solution(answers) {
    let [countHater1, countHater2, countHater3] = [0, 0, 0]
    const answerHater1 = [1, 2, 3, 4, 5]
    const answerHater2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const answerHater3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === answerHater1[i%5]) countHater1 += 1
        if (answers[i] === answerHater2[i%8]) countHater2 += 1
        if (answers[i] === answerHater3[i%10]) countHater3 += 1
    }
    
    const max = Math.max(countHater1, countHater2, countHater3)
    const answer = []
    if (countHater1 === max) answer.push(1)
    if (countHater2 === max) answer.push(2)
    if (countHater3 === max) answer.push(3)
    return answer
}