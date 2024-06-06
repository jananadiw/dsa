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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // to keep track of elements we visited in the tree
    // if n === k then we've visited the kth element, and return it
    let n = 0; 
    let stack = [];
    let curr = root;

    while(curr || stack.length > 0){
        while(curr){
            stack.push(curr)
            curr = curr.left;
        }
            curr = stack.pop();
            n += 1;
            if(n===k) {
                return curr.val;
            }
            curr = curr.right;
    }
};