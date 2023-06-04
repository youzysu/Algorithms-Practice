/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const x = grid.length
    const y = grid[0].length

    let islandCount = 0
    const dfs = (x, y) => {
        if (grid[x][y] === '1') {
            grid[x][y] = '0'
        } else {
            return
        }
        // 아래
        if (x < grid.length - 1) {
            dfs(x + 1, y)
        }
        // 오른쪽
        if (y < grid[x].length - 1) {
            dfs(x, y + 1)
        }
        // 왼쪽
        if (y > 0) {
            dfs(x, y - 1)
        }
        // 위
        if (x > 0) {
            dfs(x - 1, y)
        }
    }

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (grid[i][j] === '1') {
                islandCount += 1
                dfs(i, j)
            }
        }
    }

    return islandCount
};