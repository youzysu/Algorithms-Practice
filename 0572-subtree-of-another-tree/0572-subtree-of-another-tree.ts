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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    
    let answer = false
    
    if (!root) {
        return answer
    }
              
    answer = compareTree(root, subRoot)
    
    if (answer === true) {
        return true
    }
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

const compareTree = (root, subRoot) => {
    if(!root && !subRoot) return true
    if(!root && subRoot || root && !subRoot) return false
    if(root.val !== subRoot.val) return false
    
    return compareTree(root.left, subRoot.left) && compareTree(root.right, subRoot.right)
}
   