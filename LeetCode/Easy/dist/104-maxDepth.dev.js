"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
104. Maximum Depth of Binary Tree
 
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var _maxDepth3 = function maxDepth(root) {
  var max = 0;

  var lmax = _maxDepth3(root.left);

  var rmax = _maxDepth3(root.right);

  if (lmax > rmax) {
    root = root.left;
    max = lmax;
  } else {
    root = root.right;
    max = rmax;
  }

  return max + 1;
}; // second try


var _maxDepth3 = function _maxDepth(root) {
  if (!root) return 0;
  var lHeight = _maxDepth3(root.left) + 1;
  var rHeight = _maxDepth3(root.right) + 1;
  return lHeight > rHeight ? lHeight : rHeight;
}; // simplist


var _maxDepth3 = function _maxDepth2(root) {
  if (!root) {
    return 0;
  }

  return Math.max(_maxDepth3(root.left), _maxDepth3(root.right)) + 1;
};