const count = (answers, type) => {
    return answers.filter((v, i) => v === type[i % type.length]).length
}
    
function solution(answers) {
    const type1 = [1, 2, 3, 4, 5]
    const type2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const type3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]    

    const [count1, count2, count3] = [count(answers, type1), count(answers, type2), count(answers, type3)]
    const max = Math.max(count1, count2, count3)
    
    const answer = []
    if (count1 === max) answer.push(1)
    if (count2 === max) answer.push(2)
    if (count3 === max) answer.push(3)
    return answer
}

