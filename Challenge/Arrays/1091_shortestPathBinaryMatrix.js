// https://leetcode.com/problems/shortest-path-in-binary-matrix/


/**
 * BFS
 * *Time: O(N)
 * *Space: O(N)
 */

var shortestPathBinaryMatrix = function(grid) {
    let directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	];
    if(grid[0][0]===1) return -1;
    let n= grid.length;
    let queue = [[0,0,1]]; // [row, col, path]
    while(queue.length){
        let [row, col, path] = queue.shift();
        if(row == n-1 && col==n-1) return path;
        for(let [dx,dy] of directions){
                let x = row+ dx;
                let y= col+ dy;
                if(x<0 || x>=n) continue
                if(y<0 || y>=n) continue
                if(grid[x][y]!==0) continue

                queue.push([x,y, path+1]);
                grid[x][y]=1; // marking it as visited
        }
        
    }
    return -1;
};

console.log(shortestPathBinaryMatrix([[0,1,1],[1,0,1],[1,1,0]]))