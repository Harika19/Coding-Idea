// https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Solution {
    logic(root, level, res){
        if(root==null){
            return
        }
        if(level== res.length){
            res.push(root.data);
        }
        this.logic(root.left, level+1, res)
        this.logic(root.right, level+1, res)
        return res
    }
    leftView(root)
    {
        //your code here
        let res =[]
        return(this.logic(root, 0,res));
    }
}


let root = new Node(1);
root.left = new Node(3);
root.right = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Create an instance of the Solution class
let solution = new Solution();

// Call the leftView function
let result = solution.leftView(root);

// Display the output
console.log("Left View of the Binary Tree:", result);