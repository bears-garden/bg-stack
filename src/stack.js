/**
 * Created by arthuranderson on 3/13/17.
 */

const Node = require("bg-single-node");

class Stack{
    constructor(){
        this.head = null;
    }

    push( obj ){
        this.head = Node.insert( this.head, obj );
    }

    pop(){
        let retval = this.head;
        this.head = Node.remove( this.head, this.head.data );
        return retval.data;
    }

    empty(){
        return this.head === null;
    }
}
module.exports = Stack;
