const Node = require('./node');

class LinkedList {
    constructor() {
    	this._head = null;
    	this._tail = null;
    	this.length = 0;
    }

    append(data) {
    	let node = new Node(data);
    	if(this._head == null){
    		this._head = node;
    		this._tail = this._head;
    	} else{
    		this._tail.next = node;
    		node.prev = this._tail;
    		this._tail = node;
    	}
    	this.length++;
    	return node;
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
