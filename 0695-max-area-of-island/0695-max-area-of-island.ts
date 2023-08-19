function maxAreaOfIsland(grid: number[][]): number {
    const answer = {count : 0}
    const row = grid.length
    const column = grid[0].length
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            dfs(grid, i, j, answer)
        }
    }
    
    return answer.count
};

function dfs(grid, i, j, answer, island = {count: 0}) {
    if (!grid[i] || !grid[i][j]) {
        return
    }
    
    answer.count = Math.max(answer.count, island.count += grid[i][j])
    grid[i][j] = 0
    dfs(grid, i, j - 1, answer, island)
    dfs(grid, i, j + 1, answer, island)
    dfs(grid, i - 1, j, answer, island)
    dfs(grid, i + 1, j, answer, island)
}
