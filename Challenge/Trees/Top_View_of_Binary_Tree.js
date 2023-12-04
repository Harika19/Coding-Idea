class Node{
    constructor(data){
        this.data= data;
        this.left = null;
        this.right = null;
    }
}

class Pair{
    constructor(node, hd){
        this.node= node;
        this.hd=hd;
    }
}

class Solution
{
    //Function to return a list of nodes visible from the top view 
    //from left to right in Binary Tree.
    topView(root)
    {
        //your code here
        let map = new Map();
        let ans =[]
        let queue = [];
        queue.push(new Pair(root, 0));
        while(queue.length){
            let ele = queue.shift();
            let node = ele.node;
            let hd = ele.hd;
            if(!map.has(hd)){
                map.set(hd, node.data);
            }
            if(node.right!=null){
                queue.push(new Pair(node.right, hd+1))
            }
            if(node.left!=null){
                queue.push(new Pair(node.left, hd-1))
            }
            
        }

        // for (const [key, value] of map.entries()) {
        //     ans.push(value);
        // }
        [...map.keys()].sort((a, b) => a - b).forEach((key) => {
            ans.push(map.get(key));
        });
        return ans;

    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
root.right.left = new Node(7);


let obj = new Solution();
console.log(obj.topView(root))


