

function solution(array, commands) {
    const k = (command) => {
        const splited = array.slice(command[0] - 1, command[1]).sort((a, b)=> a-b)
        return splited[command[2] - 1]
    }
    const answer = []
    commands.forEach((command) => {
        answer.push(k(command))
    })
    return answer
}