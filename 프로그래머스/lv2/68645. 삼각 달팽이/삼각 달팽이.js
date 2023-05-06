function solution(n) {
    const grid = Array.from({length: n}, () => Array.from({length: n}).fill(0))
    let [x, y] = [0, -1]
    
    // 아래, 오른쪽, 위 3번을 한 사이클로
    let cur = 1
    for (let i = 0; i < n; i++) { // i번의 cycle
        const direction = i % 3 // 아래, 오른쪽, 위를 순서로 cycle이 돌아감
        
        for (let j = i; j < n; j++) { // i 사이클에서 n - i개
            if (direction === 0) y += 1
            if (direction === 1) x += 1
            if (direction === 2) {
                y -= 1
                x -= 1
            }
            grid[y][x] = cur
            cur += 1
        }
    }
    
    return grid.map((a) => a.filter((n) => n !== 0)).flat()
}