function maxAreaOfIsland(grid: number[][]): number {
    let max = 0
    const row = grid.length
    const column = grid[0].length
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, dfs(grid, i, j))
            }
        }
    }
    
    return max
};

function dfs(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
        return 0
    }
    
    grid[i][j] = 0
    
    let island = 1
    island = island + dfs(grid, i, j+1)
    island = island + dfs(grid, i, j-1)
    island = island + dfs(grid, i+1, j)
    island = island + dfs(grid, i-1, j)
    
    return island
}