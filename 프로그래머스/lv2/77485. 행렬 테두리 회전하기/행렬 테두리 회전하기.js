function solution(rows, columns, queries) {    
    const grid = makeGrid(rows, columns)
    const answer = []
    
    return queries.map((q) => rotate(grid, q))
}

// 1. 초기 배열 생성하기
function makeGrid(rows, columns) {
    const grid = Array.from({length: rows}, (_, rowIndex) => 
    Array.from({length: columns}, (_, columnIndex) => (rowIndex * columns) + (columnIndex + 1)))

    return grid
}

// 2. 회전시킨 grid와 회전된 숫자 중 최솟값 반환하기
function rotate(grid, query) {
    const [x1, y1, x2, y2] = query.map((i) => i -= 1)
    const first = grid[x1][y1]
    let min = first
    
    // 좌표를 기준으로 이동 방향에 맞는 값 할당해주기
    // 현재값과 최소값 비교해주기
    // 1. 직사각형 좌변 회전
    for (let i = x1; i < x2; i++) {
        grid[i][y1] = grid[i + 1][y1] // 아래 값 할당
        min = Math.min(min, grid[i + 1][y1])
    }
    // 2. 밑변 회전
    for (let i = y1; i < y2; i++) {
        grid[x2][i] = grid[x2][i+1] // 오른쪽 값 할당
        min = Math.min(min, grid[x2][i+1])
    }
    // 3. 우변 회전
    for (let i = x2; i > x1; i--) {
        grid[i][y2] = grid[i - 1][y2] // 윗값 할당
        min = Math.min(min, grid[i - 1][y2])
    }
    // 4. 윗변 회전
    for (let i = y2; i > y1; i--) {
        grid[x1][i] = grid[x1][i - 1] // 왼쪽값 할당
        min = Math.min(min, grid[x1][i - 1])
    }
    // 5. 첫번째 값 할당
    grid[x1][y1 + 1] = first
    
    return min
}