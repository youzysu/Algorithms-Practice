const lower = 'abcdefghijklmnopqrstuvwxyz'
const upper = lower.toUpperCase()

function solution(s, n) {
    let answer = ''
    
    for (const char of s) {
        if (char === ' ') answer += char
        else {
            const type = lower.includes(char) ? lower : upper
            let index = type.indexOf(char) + n
            
            if (index >= type.length) index = index - type.length
            answer += type[index]
        }
    }
    
    return answer
}

