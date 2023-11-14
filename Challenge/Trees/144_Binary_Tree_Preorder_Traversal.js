/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
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

// Input: root = [1,null,2,3]
let root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
let root2 = new TreeNode();

// Execute preorderTraversal function
console.log(preorderTraversal(root1));
console.log(preorderTraversal(root2));
