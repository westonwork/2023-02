// Definition for a binary tree node.
function TreeNode(val, left, right) {
this.val = (val === undefined ? 0 : val)
this.left = (left === undefined ? null : left)
this.right = (right === undefined ? null : right)
}
//  @param { TreeNode } root
// @return { number }

// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

// https://leetcode.com/problems/diameter-of-binary-tree
// solution: https://youtu.be/bkxqA8Rfv04


var diameterOfBinaryTree = function(root, max = [0]) {
    diameterOfTree(root, max);

    return max[0];
};

const diameterOfTree = (root, max) => {
    const isBaseCase = root === null;
    if (isBaseCase) return 0;

    return dfs(root, max);
}

const dfs = (root, max) => {
    const left = diameterOfTree(root.left, max);
    const right = diameterOfTree(root.right, max);

    const diameter = left + right;
    max[0] = Math.max(max[0], diameter);

    const height = Math.max(left, right);

    return height + 1;
}

