

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    logic(root, level, res){
        if(root==null) return 
        if(res.length==level){
            res.push(root.data)
        }
        this.logic(root.right, level+1, res)
        this.logic(root.left, level+1, res)
        return res
    }
    
    rightView(root)
    {
        //your code here
        let res =[];
        return this.logic(root, 0, res);
        
    }
}


let root = new Node(1);
root.left = new Node(3);
root.right = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Create an instance of the Solution class
let solution = new Solution();

// Call the rightView function
let result = solution.rightView(root);

// Display the output
console.log("right View of the Binary Tree:", result);