/* Symmetric Tree
https://leetcode.com/problems/symmetric-tree/

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
    Input: root = [1,2,2,3,4,4,3]
    Output: true


Example 2:
    Input: root = [1,2,2,null,3,null,3]
    Output: false
*/


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function walk(left: TreeNode | null, right: TreeNode | null): boolean {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    return (left.val === right.val && walk(left.left, right.right) && walk(left.right, right.left));
}

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) return true;
    return walk(root.left, root.right);
}
