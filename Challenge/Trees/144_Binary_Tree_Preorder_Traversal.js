

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) return [];
    let stack = [root];
    let res = [];
    while (stack.length) {
        let temp = stack.pop();
        res.push(temp.val);
        if (temp.right != null) {
            stack.push(temp.right);
        }
        if (temp.left != null) {
            stack.push(temp.left);
        }
    }
    return res;
};


let root = new Node(1);
root.left = new Node(3);
root.right = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(preorderTraversal(root));

// ======================================== input in different way


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var preorderTraversal = function(root) {
    if (!root) return [];
    let stack = [root];
    let res = [];
    while (stack.length) {
        let temp = stack.pop();
        res.push(temp.val);
        if (temp.right != null) {
            stack.push(temp.right);
        }
        if (temp.left != null) {
            stack.push(temp.left);
        }
    }
    return res;
};


// Input: root = [1,null,2,3]
let root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

console.log(preorderTraversal(root1));
