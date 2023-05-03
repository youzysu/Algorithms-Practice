function solution(line) {
    var points = [];
    
    // 1. 교점 구하기
    for (let i = 0; i < line.length; i++) {
        for (let j = i+1; j < line.length; j++) {
            const [a, b, e] = line[i]
            const [c, d, f] = line[j]
            
            const sonX = (b * f) - (e * d)
            const parentX = (a * d) - (b * c)
            const sonY = (e * c) - (a * f)
            const parentY = a*d - b* c
            
            const x = sonX / parentX
            const y = sonY / parentY
            
            if (x % 1 === 0 && y % 1 === 0) {
                points.push([x, y])
            }
        }
    }
    
    // 2. 직사각형 너비 높이 구하기
    let [minX, maxX, minY, maxY] = [Infinity, -Infinity, Infinity, -Infinity]
    points.forEach(([x, y]) => {
        if (x < minX) minX = x
        if (y < minY) minY = y
        if (x > maxX) maxX = x
        if (y > maxY) maxY = y
    })
    
    const width = maxX - (minX - 1)
    const height = maxY - (minY - 1)
    
    // 3. 교점 바꾸기
    const answer = Array.from({length: height}, () => Array.from({length: width}).fill('.'))
    
    points.forEach(([x, y]) => {
        answer[maxY - y][x - minX] = '*'
    })

    return answer.map(v => v.join(''))
}

