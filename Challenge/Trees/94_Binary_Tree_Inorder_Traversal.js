// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var inorderTraversal = function(root, res=[]) {
    if(!root) return [];
    if(root.left) inorderTraversal(root.left, res);
    res.push(root.val);
    if(root.right) inorderTraversal(root.right, res);
    return res;
};

// Input: root = [1,null,2,3]
let root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
let root2 = new TreeNode();

// Execute preorderTraversal function
console.log(inorderTraversal(root1));
console.log(inorderTraversal(root2));