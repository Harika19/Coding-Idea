function treeNode(val){
    this.val = val;
    this.left = this.right= null;
}

function isidentical(tree1, tree2){
    if(tree1 === null && tree2 === null) {
        return true;
    }

    if(tree1===null || tree2 === null || tree1.val !== tree2.val){
        return false;
    }

    return isidentical(tree1.left, tree2.left) && isidentical(tree1.right, tree2.right);
}

const tree1 = new treeNode(1);
tree1.left = new treeNode(2);
tree1.right = new treeNode(3);
tree1.right.right = new treeNode(9);

const tree2 = new treeNode(1);
tree2.left = new treeNode(2);
tree2.right = new treeNode(3);
tree2.right.right = new treeNode(9);

const res = isidentical(tree1, tree2);
console.log("both trees are ", res);