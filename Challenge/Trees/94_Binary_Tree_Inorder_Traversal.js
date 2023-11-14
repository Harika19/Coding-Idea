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
var inorderTraversal = function(root, res=[]) {
    if(!root) return [];
    if(root.left) inorderTraversal(root.left, res);
    res.push(root.val);
    if(root.right) inorderTraversal(root.right, res);
    return res
};