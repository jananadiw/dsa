/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    // O(logn) time (only visiting one node for every level of the tree)
    // O(1) space (not needing any data structures)
    let curr = root;
    while(curr) {
        // if both p value and q value > than the current value
        if(p.val > curr.val && q.val > curr.val){
        // go down the right subtree
        curr = curr.right;
        // if both p value and q value < than the current value
        } else if (p.val < curr.val && q.val < curr.val) {
            curr = curr.left;
        }else {
            //if theres a split, or found p or q
            return curr;
        }

    }
};