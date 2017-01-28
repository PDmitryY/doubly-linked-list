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

    head() {
    	if(this._head){
    		return this._head.data;
    	};
    }

    tail() {
    	if(this._tail){
    		return this._tail.data;
    	};
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
    	if(this.length == 0){
    		return true;
    	};
    	return false;
    }

    clear() {
    	if(this.isEmpty()){
    		return;
    	}
    	else{
    		this.length = 0;
    		this._head.data = null;
    		this._tail.data = null;
    	}
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
