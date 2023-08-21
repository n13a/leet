/* Balanced Binary Tree
https://leetcode.com/problems/balanced-binary-tree/ */


/* Given a binary tree, determine if it is
height-balanced
.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:

Input: root = []
Output: true

 

Constraints:

    The number of nodes in the tree is in the range [0, 5000].
    -104 <= Node.val <= 104

 */




class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function walk(node: TreeNode | null): [boolean, number] {
    if(!node){
        return [true, 0]
    }
    const left = walk(node.left), right = walk(node.right)

    const balance = (left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1)

    return [balance, 1 + Math.max(left[1], right[1])]



}
function isBalanced(root: TreeNode | null): boolean {
    return walk(root)[0]
};
