const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    if (this.rootNode === null) { return null }
    return this.rootNode;
  }

  add(val) {
    function addVal(currNode, val) {
      if (currNode === null) { return new Node(val) }
      if (currNode.data === val) { return currNode }
      if (currNode.data > val) {
        currNode.left = addVal(currNode.left, val);
      } else {
        currNode.right = addVal(currNode.right, val);
      }
      return currNode;
    }

    this.rootNode = addVal(this.rootNode, val);
  }

  has(val) {
    function hasVal(currNode, val) {
      if (currNode === null) { return false }
      if (currNode.data === val) { return true }
      return currNode.data > val ? hasVal(currNode.left, val) : hasVal(currNode.right, val);
    }

    return hasVal(this.rootNode, val);
  }

  find(val) {
    function hasVal(currNode, val) {
      if (currNode === null) { return null }
      if (currNode.data === val) { return currNode }
      return currNode.data > val ? hasVal(currNode.left, val) : hasVal(currNode.right, val);
    }

    return hasVal(this.rootNode, val);
  }

  remove(val) {
    function removeNode(currNode, val) {
      if (currNode === null) { return null }
      if (currNode.data > val) {
        currNode.left = removeNode(currNode.left, val)
        return currNode;
      } else if (currNode.data < val) {
        currNode.right = removeNode(currNode.right, val)
        return currNode;
      } else {
        if (!currNode.left && !currNode.right) { return null }

        if (!currNode.left) {
          currNode = currNode.right;
          return currNode;
        }
        if (!currNode.right) {
          currNode = currNode.left;
          return currNode;
        }

        let minRight = currNode.right;
        while (minRight.left) { minRight = minRight.left }
        currNode.data = minRight.data;
        currNode.right = removeNode(currNode.right, minRight.data);

        return currNode;
      }
    }

    this.rootNode = removeNode(this.rootNode, val);
  }

  min() {
    if (this.rootNode === null) { return }
    let currNode = this.rootNode;
    while (currNode.left) { currNode = currNode.left }
    return currNode.data;
  }

  max() {
    if (this.rootNode === null) { return }
    let currNode = this.rootNode;
    while (currNode.right) { currNode = currNode.right }
    return currNode.data;
  }
}

module.exports = {
  BinarySearchTree
};