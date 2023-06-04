/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    // 현재 item 기준으로 주변에 있는 아이템들: 탐색할 좌표
    const queue = []
    const bfs = (i, j) => {
        queue.push([i, j])

        while (queue.length) {
            const item = queue.shift()
            const x = item[0]
            const y =item[1]

            if (grid[x][y] === '1') {
                grid[x][y] = '0'

                if (x > 0) {
                    queue.push([x-1, y])
                }
                if (y > 0) {
                    queue.push([x, y-1])
                } 
                if (x < grid.length - 1) {
                    queue.push([x+ 1, y])
                }
                if (y < grid[0].length - 1) {
                    queue.push([x, y+1])
                }
            }
        }
    }

    for (let i =0;i < grid.length; i++) {
        for (let j =0;j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count += 1
                bfs(i, j)
            }

        }
    }

    return count
};