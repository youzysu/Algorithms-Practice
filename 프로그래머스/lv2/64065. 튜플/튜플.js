// 모든 집합이 가지고 있는 숫자가 배열의 첫번째 요소
// 집합에서 가지고 있는 개수에 따라 내림차순으로 결정된다.

function solution(s) {
    const obj = {}
    const regex = /\d+/g
    const t = s.match(regex)
    t.forEach((num) => {
        obj[num] = obj[num] ? obj[num] + 1 : 1
    })

    const entries = Object.entries(obj).sort((a, b) => b[1] - a[1])
    return entries.map((item) => Number(item[0]))
}