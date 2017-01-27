const Node = require('./node');

class LinkedList {
    constructor() {
    	this._head = null;
    	this._tail = null;
    	this.length = 0;
    }

    append(data) {
    	if(this._head == null){
    		this._head = new Node(data);
    		this._tail = this._head;
    		this.length++;
    		return
    	}
    	let node = new Node(data);
    	this._tail = node;
    	node.prev = this._head;
    	this.length++;

    }

    head() {}

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
