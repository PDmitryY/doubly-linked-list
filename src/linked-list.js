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
    	}else{
    		return null;
    	}
    }

    tail() {
    	if(this._tail){
    		return this._tail.data;
    	}else{
    		return null;
    	}
    }

    at(index) {
    	const foundNode = this._find(index);
    	return foundNode ? foundNode.data : null;
    }

    insertAt(index, data) {
    	let node = new Node(data);
    	let currentNode = this._find(index);
    	if(!currentNode) {
    		throw new Error("Error");
    		return;
    	};
    	let prevNode = currentNode.prev;
    	if(currentNode){
    		currentNode.prev = node;
    		node.next = currentNode;
    		node.prev = prevNode;

    		if(prevNode) prevNode.next = node;
    		if(index == 0){
    			this._head = node;
    		};
    	}
    }

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
    		this._head = null;
    		this._tail = null;
    	}
    }

    deleteAt(index) {}

    reverse() {
    	let temp = null;
    	let currentNode = this._head;
    	while(currentNode != null){
    		temp = currentNode.prev;
    		currentNode.prev = currentNode.next;
    		currentNode.next = temp;
    		currentNode = currentNode.prev;
    	}
    	if(temp != null){
    		this._tail = this._head;
    		this._head = temp.prev;
    	}
    }

    indexOf(data) {}

    _find(index){
    	if(this.isEmpty() || (this.length < index)){
    		return;
    	};
    	let node = this._head;
    	let counter = 0;
    	while(counter != index){
    		node = node.next;
    		counter++
    	}
    	return node;
    }
    _printAll() {
	   let n = this._head;
	  
	   while(n) {
	    console.log(n.data);
	    n = n.next;
	   }
	}
}

module.exports = LinkedList;
