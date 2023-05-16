function solution(n) {
    const t = n.toString(3)
    const reversed = t.split('').reverse().join('')
    return parseInt(reversed, 3)
}